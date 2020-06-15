require 'pry'

# A object is kind of like a hash -- it stores key/value pairs.
# BUT you have to predefine the keys that are going to be used.
# (you have to predefine the shape)
# ALSO: unlike a hash, objects are designed to store functionality (i.e. methods)

class Actor
  def award_speech
    "I would to thank my parents and my agent and my life partner. We did it, baby"
  end

  def deny_allegations
    "I deny that I was drunk and I don't remember and he's not my type"
  end
end

class Stooge < Actor
  def terrible?
    true
  end
end

# Low Ceremony Language
class MarxBrother < Actor
  attr_accessor :name, :instrument, :vice # ruby macro: creates getters and setters

  def initialize(n='', i='', v='lampooning authority') # Variadic
    @name = n
    @instrument = i
    @vice = v
  end

  def play
    "My name is #{ @name } and I play the #{ @instrument }."
  end
end

groucho = MarxBrother.new # An object is an instance of its class
chico = MarxBrother.new 'Chico Marx', 'piano', 'infidelity'
harpo = MarxBrother.new 'Harpo Marx'

binding.pry
