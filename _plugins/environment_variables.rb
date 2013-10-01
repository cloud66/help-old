module Jekyll
 
  class EnvironmentVariablesGenerator < Generator
 
		priority :highest
		
    def generate(site)
      site.config['env'] = ENV['JEKYLL_ENV'] || 'development'
			
			raise "Environment INDEXTANK_URL not found" unless ENV['INDEXTANK_URL']
			
			site.config['indextank_api_url'] = ENV['INDEXTANK_URL']
			site.config['indextank_index'] = ENV['JEKYLL_ENV'] == 'production' ? 'help_pages' : 'dev_help_pages'
    end
 
  end
 
end