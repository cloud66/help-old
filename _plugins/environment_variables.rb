module Jekyll
 
  class EnvironmentVariablesGenerator < Generator
 
		priority :highest
		
    def generate(site)
      site.config['env'] = ENV['JEKYLL_ENV'] || 'development'
			site.config['elasticsearch_url'] = ENV['ELASTICSEARCH_URL'] || 'localhost:9200'
			site.config['elasticsearch_index'] = ENV['JEKYLL_ENV'] == 'production' ? 'help_pages' : 'dev_help_pages'
			site.config['reindex'] = true if ENV['JEKYLL_REINDEX']
    end
 
  end
 
end