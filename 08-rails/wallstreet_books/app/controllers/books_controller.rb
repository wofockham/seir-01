class BooksController < ApplicationController
  def form
    render :form
  end

  def result
    @title = params[:book_title]
    book_url = "https://www.googleapis.com/books/v1/volumes?q=title:#{ @title }"
    info = HTTParty.get book_url
    @cover = info["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]
    render :result
  end
end
