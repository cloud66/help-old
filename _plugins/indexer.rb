require 'rubygems'
require 'nokogiri'
require 'elasticsearch'

module Jekyll

  class Indexer < Generator

		priority :low
		
    # Index all pages except pages matching any value in config['elasticsearch_excludes']
    def generate(site)
			unless ENV['JEKYLL_REINDEX']
				puts 'Skipping indexing'
				return
			end
			
      excludes = site.config['elasticsearch_excludes'] || []

			index_name = site.config['elasticsearch_index']
			
      # gather pages and posts
      items = site.pages.dup.concat(site.posts)
			
      # only process files that will be converted to .html and only non excluded files 
      items = items.find_all {|i| i.output_ext == '.html' && ! excludes.any? {|s| (i.url =~ Regexp.new(s)) != nil } } 
      items.reject! {|i| i.data['exclude_from_search'] } 

      # dont process index pages
      items.reject! {|i| i.is_a?(Jekyll::Page) && i.index? }
			
			# build it
			docs = []
			items.each do |item|
				page_text = extract_text(site, item)
				
				if item.output =~ /<p\sclass=.lead.>(?<excerpt>.*?)<\/p>/m
					excerpt = $~[:excerpt]
				end # if
				
				docs << {
					:id => item.url,
					:title => item.data['title'] || item.name,
          :text => page_text,
					:excerpt => excerpt,
					:link => item.url,
					:tags => item.data['categories'].is_a?(String)? [item.data['categories']] : item.data['categories'],
					:suggest => item.data['title'] || item.name
				}
			
        puts "Added #{item.url}..."
      end # each
						
			# index it
			client = Elasticsearch::Client.new(:log => true, :host => site.config['elasticsearch_url'])
			if client.indices.exists :index => index_name
				client.indices.delete(:index => index_name)
			end
			client.indices.create(:index => index_name, :body => {
				:mappings => { 
					:help_page => { 
						:properties => {
							:id => { :type => 'string', :index => 'not_analyzed', :include_in_all => false },
							:title => { :type => 'string', :boost => 10.0, :analyzer => 'snowball' },
							:suggest => { 
								:type => :completion,
								:index_analyzer => 'simple',
								:search_analyzer => 'simple',
								:payloads => true
							},
							:text => { :type => 'string', :analyzer => 'snowball'},
							:excerpt => { :type => 'string', :boost => 5.0, :analyzer => 'snowball' },
							:link => { :type => 'string', :index => 'not_analyzed', :include_in_all => false },
							:tags => { :type => 'string', :analyzer => 'keyword' }
						}
					}
				}
			})
				
			puts 'Indexing...'
			docs.each do |doc|
				client.index(:index => index_name, :type => 'help_page', :body => doc)
			end # each
			
      puts 'Indexing done'
    end # generate

    # render the items, parse the output and get all text inside <p> elements
    def extract_text(site, page)
      page.render({}, site.site_payload)
      doc = Nokogiri::HTML(page.output)
      paragraphs = doc.search('p').map {|e| e.text}
      page_text = paragraphs.join(" ").gsub("\r"," ").gsub("\n"," ")
    end # extract_text
		
  end # class
end # module