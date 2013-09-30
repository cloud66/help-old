
module Jekyll
  class SortedCategoriesBuilder < Generator
  
		ORDER = [ 
			'getting-started', 
			'stacks', 
			'how-to', 
			'stack-features',
			'add-ins',
			'api',
			'cloud-providers',
			'troubleshooting',
			'web-server',
			'your-account',
			'jekyll'
		]
		
    safe true
    priority :high

    def generate(site)
			# sort all existing cats
			site.config['sorted_categories'] = site.categories.map { |cat, posts| 
				[cat, posts.size, posts] }.sort { |a,b| ORDER.index(a[0]) <=> ORDER.index(b[0]) }
		end

  end
end

