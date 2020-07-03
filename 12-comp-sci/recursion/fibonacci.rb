def fibonacci_iterative(n)
  a = 1
  b = 1
  while n > 2 # base case: fib(1) = 1, fib(2) = 1
    a, b = b, a+b # parallel assignment
    n -= 1 # mutation: move towards the base case
  end

  b
end

# recursion: fib(n) = fib(n-1) + fib(n-2)
def fibonacci_recursive(n)
  if n == 1 || n == 2
    1
  else
    fibonacci_recursive(n-1) + fibonacci_recursive(n-2)
  end
end

# bonus recursion:
# memoisation
# faster recursion: iterative recursion

require 'pry'
binding.pry
