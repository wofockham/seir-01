class FruitsController < ApplicationController
  def index
    @fruits = Fruit.order('id DESC') # Fruit.all.order

    respond_to do |format|
      format.html { } # The empty block tells Rails to apply the default behaviour (i.e. render :index)
      format.json { render :json => @fruits }
    end
  end
end
