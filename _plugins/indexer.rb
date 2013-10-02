require 'rubygems'
require 'indextank'
require 'nokogiri'

module Jekyll

  class Indexer < Generator

		priority :low
		
    # Index all pages except pages matching any value in config['indextank_excludes']
    # The main content from each page is extracted and indexed at indextank.com
    # The doc_id of each indextank document will be the absolute url to the resource without domain name 
    def generate(site)
			unless site.config['reindex']
				puts 'Skipping indexing. Use JEKYLL_REINDEX to reindex the site'
				return
			end
			
      puts 'Indexing pages...'
			
      raise ArgumentError.new 'Missing indextank_api_url.' unless site.config['indextank_api_url']
      raise ArgumentError.new 'Missing indextank_index.' unless site.config['indextank_index']
      
      excludes = site.config['indextank_excludes'] || []

      api = IndexTank::Client.new(site.config['indextank_api_url'])
      index = api.indexes(site.config['indextank_index'])
			index.delete
			index.add :public_search => true
			while not index.running?
				sleep 0.5
			end
			
      # gather pages and posts
      items = site.pages.dup.concat(site.posts)

      # only process files that will be converted to .html and only non excluded files 
      items = items.find_all {|i| i.output_ext == '.html' && ! excludes.any? {|s| (i.url =~ Regexp.new(s)) != nil } } 
      items.reject! {|i| i.data['exclude_from_search'] } 

      # dont process index pages
      items.reject! {|i| i.is_a?(Jekyll::Page) && i.index? }
			      
      items.each do |item|              
        page_text = extract_text(site, item)

				if item.output =~ /<p\sclass=.lead.>(?<excerpt>.*?)<\/p>/
					excerpt = $~[:excerpt]
				end
        index.document(item.url).add({ 
          :text => page_text,
          :title => item.data['title'] || item.name,
					:excerpt => excerpt,
					:link => item.url
        })
        puts 'Indexed ' << item.url
      end
      
      puts 'Indexing done'
    end

    # render the items, parse the output and get all text inside <p> elements
    def extract_text(site, page)
      page.render({}, site.site_payload)
      doc = Nokogiri::HTML(page.output)
      paragraphs = doc.search('p').map {|e| e.text}
      page_text = paragraphs.join(" ").gsub("\r"," ").gsub("\n"," ")
    end

  end 
end