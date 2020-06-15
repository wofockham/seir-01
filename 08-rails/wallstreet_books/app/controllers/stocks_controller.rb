class StocksController < ApplicationController
  StockQuote::Stock.new(:api_key => 'pk_16a849fd637243a79fff90fa4d42bc5d')

  def form
    render :form
  end

  def result
    @stock_code = params[:stock_code].upcase # indifferent hashes
    @info = StockQuote::Stock.quote @stock_code
    render :result
  end
end
