class FruitsController < ApplicationController
  def index
    @fruits = Fruit.order('id DESC') # Fruit.all.order

    respond_to do |format|
      format.html { } # The empty block tells Rails to apply the default behaviour (i.e. render :index)
      format.json { render :json => @fruits }
    end
  end

  def create
    @fruit = Fruit.new fruit_params
    if @fruit.save
      redirect_to @fruit # fruit_path(@fruit.id)
    else
      render :new
    end
  end

  private
  def fruit_params
    params.require(:fruit).permit(:name)
  end
end
