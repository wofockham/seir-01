class PagesController < ApplicationController
  def home
  end

  def numbers
    @amount = 2323
    @large_number = 239823924523
    @phone = 2125551212
  end

  def text
    @numbers = (1..20).to_a.shuffle
    @story = "Stately, plump Buck Mulligan came from the stairhead, bearing a bowl of lather on which a mirror and a razor lay crossed."
    @friend_count = 1
    @enemy_count = 15
  end

  def assets
  end

  def url
  end
end
