require 'sinatra'
require 'sinatra/reloader'
require 'pry'

# Root page or home page
get '/' do
  "Hello World from the home page"
end

get '/hello' do
  "Hello Cruel World"
end

get '/goodbye' do
  "Goodbye Cruel World"
end

# Dynamic content
get '/lucky' do
  "Here is your lucky number: #{ Random.rand 1..40 }"
end

get '/uptime' do
  "Here is the server uptime: #{ `uptime` }"
end

# Dynamic URL: this works for infinitely many names
get '/fanclub/:name' do
  "#{ params[:name].capitalize } is a proud member of the Marx Brothers Fan Club."
end

get '/fanclub/:first/:last' do
  "#{ params[:first].capitalize } #{ params[:last].upcase } is a premium member of the Marx Brothers Fan Club."
end

get '/fanclub/:first/:last/:favourite' do
  "#{ params[:first].capitalize } #{ params[:last].upcase } is a platinum member of the Marx Brothers Fan Club and their favourite Marx Brother is #{ params[:favourite] }."
end

# Second crappiest calculator of the entire course.
get '/multiply/:x/:y' do
  result = params[:x].to_f * params[:y].to_f # Web servers are OBSESSED with strings.
  "The result is <strong>#{ result }</strong>"
end

# Serious Complaints
# Where is the goddamn HTML?
# How do we get information from the user without making them change the URL?
