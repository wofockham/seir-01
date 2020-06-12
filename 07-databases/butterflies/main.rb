require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do
  erb :home
end

# INDEX -- Show all the butterflies: READ
get '/butterflies' do
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true
  @butterflies = db.execute 'SELECT * FROM butterflies'
  db.close
  erb :butterflies_index
end

# SHOW -- Shows a single butterfly: READ
get '/butterflies/:id' do
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true
  @butterfly = db.execute "SELECT * FROM butterflies WHERE id=#{ params[:id] }" # Returns an array
  @butterfly = @butterfly.first # Extract the butterfly from the array
  db.close
  erb :butterflies_show
end
