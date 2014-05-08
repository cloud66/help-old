#!/usr/bin/env ruby
require 'json'
json = File.read('whatsnew.json')
obj = JSON.parse(json)