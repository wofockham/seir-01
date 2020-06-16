Rails.application.routes.draw do
  root :to => 'planets#index'
  get '/planets' => 'planets#index'
  get '/planets/new' => 'planets#new', :as => 'new_planet' # new_planet_path
  post '/planets' => 'planets#create'
  get '/planets/:id' => 'planets#show', :as => 'planet' # planet_path
  get '/planets/:id/edit' => 'planets#edit', :as => 'edit_planet' # edit_planet_path
  post '/planets/:id' => 'planets#update'
  delete '/planets/:id' => 'planets#destroy'
end
