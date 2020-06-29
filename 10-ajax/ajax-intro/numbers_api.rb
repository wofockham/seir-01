require 'httparty'

fact = HTTParty.get 'http://numbersapi.com/random/trivia'
puts fact
