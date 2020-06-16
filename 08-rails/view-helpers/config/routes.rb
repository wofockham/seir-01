Rails.application.routes.draw do
  root :to => 'pages#home' # root_path
  get '/mcnumbers' => 'pages#numbers', :as => 'numbers'
  get '/text' => 'pages#text'
  get '/assets' => 'pages#assets'
  get '/url' => 'pages#url'
end
