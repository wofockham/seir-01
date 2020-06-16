Rails.application.routes.draw do
  get '/planets' => 'planets#index'
  get '/planets/new' => 'planets#new', :as => 'new_planet' # new_planet_path
  post '/planets' => 'planets#create'
  get '/planets/:id' => 'planets#show', :as => 'planet'
end
