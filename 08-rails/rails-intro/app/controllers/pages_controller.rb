class PagesController < ApplicationController
  def hello
    render :hello
  end

  def about
    render :about
  end

  def faq
    render :faq # app/views/pages/faq.html.erb
  end

  def funny
    render :funny
  end
end
