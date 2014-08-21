
module Jekyll
  class SortedCategoriesBuilder < Generator
  
		ORDER = [ 
			'introduction-to-cloud-66',
			'stack-definition',
			'cloud-deployment',
			'web-server-deployment',
			'database-management',
			'account-management',
			'notifications',
			'logging',
			'dns',
			'ssh',
			'ssl',
			'toolbelt',
			'partner-integration',
			'compliance-guides',			
			'api',
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
			unordered = site.categories # this is a hash
			# order the keys
			ordered_keys = unordered.keys.sort do |x, y| 
				# if any of them is in the sort list, it will win (comes on top)
				next -1 if ORDER.include?(x) && !ORDER.include?(y)
				next 1 if ORDER.include?(y) && !ORDER.include?(x)
				
				# none are in the list
				next (x <=> y) if !ORDER.include?(x) && !ORDER.include?(y)
				
				# both in the list
				ORDER.index(x) <=> ORDER.index(y)
			end
			
			# takeout all the API crap
			ordered_keys.delete_if { |x| ['basics', 'server', 'stack', 'users', 'server group'].include? x }
			
			# now order the list based on the ordered keys
			ordered = {}
			ordered_keys.each do |k|
				ordered[k] = unordered[k]
			end
			
			site.config['sorted_categories'] = ordered
		end
  end
end

