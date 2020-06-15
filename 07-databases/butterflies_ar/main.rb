require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'active_record' # Part of Rails but can work with Sinatra (with config)
require 'pry'

# Rails sets all this up for you automatically:
ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.sqlite3'
)

# Optional bonus
ActiveRecord::Base.logger = Logger.new(STDERR)

# Model:
class Butterfly < ActiveRecord::Base
end

get '/' do
  erb :home
end

# INDEX -- Show all the butterflies: READ
get '/butterflies' do
  @butterflies = Butterfly.all
  erb :butterflies_index
end

# NEW -- Shows the form to create a butterfly
get '/butterflies/new' do
  erb :butterflies_new
end

# CREATE -- Add a new butterfly to the database
post '/butterflies' do
  butterfly = Butterfly.new
  butterfly.name = params[:name]
  butterfly.family = params[:family]
  butterfly.image = params[:image]
  butterfly.save
  redirect to("/butterflies/#{ butterfly.id }") # GET show
end

# SHOW -- Shows a single butterfly: READ
get '/butterflies/:id' do
  @butterfly = Butterfly.find params[:id] # Returns just a single Butterfly object
  erb :butterflies_show
end

# EDIT -- Shows the form to edit a single butterfly: READ
get '/butterflies/:id/edit' do
  @butterfly = Butterfly.find params[:id]
  erb :butterflies_edit
end

# UPDATE -- Update the database with new information for an existing butterfly
post '/butterflies/:id' do
  butterfly = Butterfly.find params[:id]
  butterfly.name = params[:name]
  butterfly.family = params[:family]
  butterfly.image = params[:image]
  butterfly.save
  redirect to("/butterflies/#{ params[:id] }") # GET
end

# DELETE -- Delete a single butterfly from the database
get '/butterflies/:id/delete' do
  butterfly = Butterfly.find params[:id]
  butterfly.destroy
  redirect to('/butterflies')
end
