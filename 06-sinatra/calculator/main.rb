require 'sinatra'
require 'sinatra/reloader'
require 'pry'

get '/' do
  erb :home # embedded ruby
end

get '/faq' do
  erb :faq
end

get '/result' do
  @x = params[:x].to_f
  @y = params[:y].to_f
  @result = case params[:operator]
  when '+' then @x + @y
  when '-' then @x - @y
  when '*' then @x * @y
  when '/' then @x / @y
  end

  puts "The result is #{ @result }!!!!!" # Appears on the terminal

  erb :result # implicitly returned
end
