
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
			# build the list of all API subcategories
			apis = []
			site.posts.each do |post|
				apis << post.categories.last if post.categories != nil && post.categories.first == 'api' && post.categories.count > 1
			end
			
			site.config['apis'] = apis.uniq
			# sort all existing cats
			site.config['sorted_categories'] = site.categories.map do |cat, posts| 
				[cat, posts.size, posts].sort { |a,b| ORDER.index(a[0]) <=> ORDER.index(b[0]) }
			end
		end
  end
end

