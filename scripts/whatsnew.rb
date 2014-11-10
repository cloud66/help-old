# gets the URL, title and summary of the the announcement
# generates a bitly URL for it and adds it to the whatsnew.json file ready to commit

# usage: BITLY_API_TOKEN=your_bitly_token ruby whatsnew.rb

require 'bundler'
require 'json'
require 'time'
require 'nokogiri'
require 'open-uri'
require 'net/http'

print "URL: "
url = gets.chomp

page = Nokogiri::HTML(open(url))
pt = page.title

print "Title [#{pt}]: "
title = gets.chomp

title = pt if title == ''

print "Summary: "
summary = gets.chomp

# load the current json
content = JSON.parse(IO.read('../whatsnew.json'))

# shorten it
result = Net::HTTP.get(URI.parse("https://api-ssl.bitly.com/v3/shorten?access_token=#{ENV['BITLY_API_TOKEN']}&longUrl=#{url}&domain=go.c66.me"))
parsed = JSON.parse(result)

if parsed['status_code'] == 200
    new_url = parsed['data']['url']
else
    abort "Bitly call failed with #{parsed['status_txt']}"
end

new_one = { :date => Time.now.iso8601, :title => title, :summary => summary, :url => new_url }
content << new_one

File.open("../whatsnew.json","w") do |f|
  f.write(content.to_json)
end 

puts 'Done'