def factorial_iterative(n)
  result = 1
  while n > 1 # end condition
    result *= n # mutation: changing this variable
    n -= 1 # mutation: move towards the end condition
  end

  result
end

def factorial(n)
  if n > 1 # keep going
    n * factorial(n-1) # recursion: moving towards the end condition
  else
    1
  end
end

require 'pry'
binding.pry
