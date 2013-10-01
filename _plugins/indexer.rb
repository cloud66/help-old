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
      puts 'Indexing pages...'
			
      raise ArgumentError.new 'Missing indextank_api_url.' unless site.config['indextank_api_url']
      raise ArgumentError.new 'Missing indextank_index.' unless site.config['indextank_index']
      
      @storage_dir = File.join(self.home_dir, '.jekyll_indextank')
      @last_indexed_file = File.join(@storage_dir, 'last_index')
      
      create_storage_dir()
      load_last_timestamp()
      
      @excludes = site.config['indextank_excludes'] || []

      api = IndexTank::Client.new(site.config['indextank_api_url'])
      @index = api.indexes(site.config['indextank_index'])
    
      # gather pages and posts
      items = site.pages.dup.concat(site.posts)

      # only process files that will be converted to .html and only non excluded files 
      items = items.find_all {|i| i.output_ext == '.html' && ! @excludes.any? {|s| (i.url =~ Regexp.new(s)) != nil } } 
      items.reject! {|i| i.data['exclude_from_search'] } 
      
      # only process items that are changed since last regeneration
      items = items.find_all {|i| @last_indexed.nil? || File.mtime(i.path) > @last_indexed }

      # dont process index pages
      items.reject! {|i| i.is_a?(Jekyll::Page) && i.index? }
			      
      while not @index.running?
        # wait for the indextank index to get ready
        sleep 0.5
      end
      
      items.each do |item|              
        page_text = extract_text(site, item)

				if item.output =~ /<p\sclass=.lead.>(?<excerpt>.*?)<\/p>/
					excerpt = $~[:excerpt]
				end
        @index.document(item.url).add({ 
          :text => page_text,
          :title => item.data['title'] || item.name,
					:excerpt => excerpt,
					:link => item.url
        })
        puts 'Indexed ' << item.url
      end
      
      @last_indexed = Time.now
      write_last_indexed()
      
      puts 'Indexing done'
    end

    # render the items, parse the output and get all text inside <p> elements
    def extract_text(site, page)
      page.render({}, site.site_payload)
      doc = Nokogiri::HTML(page.output)
      paragraphs = doc.search('p').map {|e| e.text}
      page_text = paragraphs.join(" ").gsub("\r"," ").gsub("\n"," ")
    end

    def write_last_indexed
      begin
        File.open(@last_indexed_file, 'w') {|f| Marshal.dump(@last_indexed, f)}
      rescue
        puts 'WARNING: cannot write indexed timestamps file.'
      end
    end

    def load_last_timestamp
      begin
        @last_indexed = File.open(@last_indexed_file, "rb") {|f| Marshal.load(f)}
      rescue
        @last_indexed = nil
      end
    end

    def create_storage_dir
      begin
        Dir.mkdir(@storage_dir) unless File.exists?(@storage_dir)
      rescue SystemCallError
        puts 'WARINING: cannot create directory to store index timestamps.'
      end
    end

    def home_dir
      homes = ["HOME", "HOMEPATH"]
      ENV[homes.detect {|h| ENV[h] != nil}]
    end
    
  end 
end