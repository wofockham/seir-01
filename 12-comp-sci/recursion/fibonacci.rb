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

def fib_memo(n)
  @fib ||= {} # @fib = @fib || {} # create the @fib hash unless it already exists
  if @fib[n]
    @fib[n]
  elsif n === 1 || n == 2
    1
  else
    result = fib_memo(n-1) + fib_memo(n-2)
    @fib[n] = result # memoisation
    result
  end
end

def fib(n, a=1, b=1)
  if n == 1 || n == 2
    b
  else
    fib(n-1, b, a+b) # mystical
  end
end

require 'pry'
binding.pry
