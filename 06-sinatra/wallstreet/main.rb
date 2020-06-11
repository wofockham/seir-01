require 'sinatra'
require 'sinatra/reloader'
require 'stock_quote'

StockQuote::Stock.new(:api_key => 'pk_16a849fd637243a79fff90fa4d42bc5d')

get '/' do
  erb :home
end

get '/price' do
  @stock_code = params[:stock_code] # indifferent hashes
  begin
    @info = StockQuote::Stock.quote @stock_code
  rescue
    redirect to('/') # Start again
  end
  erb :price
end
