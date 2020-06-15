Rails.application.routes.draw do
      # route     'controller#action'
  root :to => 'pages#hello'
  get '/hello' => 'pages#hello'
  get '/about' => 'pages#about'
  get '/faq' => 'pages#faq'
  get '/funny' => 'pages#funny'

  # /auto/purple => params[:color]
  get '/auto/:color' => 'auto#color'
  get '/auto/:hp/:torque' => 'auto#engine'

  get '/calc/:x/:y/:operator' => 'calc#calculate'
end
