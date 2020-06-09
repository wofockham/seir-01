3.times { puts "Hello world" }
puts "Goodbye cruel world"

# Conditionals
if 13 > 20
  puts "Yes, 13 is the larger number"
end

# if / else
if 13 > 20
  puts "Yes, 13 is the larger number"
else
  puts "No, 13 is not the larger number"
end

# if / elsif
grade = "D"
if grade == "A"
  puts "You are killing it"
elsif grade == "B"
  puts "You are coasting fine"
elsif grade == "C"
  puts "Acceptable"
else # default
  puts "Please see Aleks after class"
end

# Modifer form (backwards if statement)
puts "Yes, 13 is the larger number" if 13 > 10

# Unless
unless 13 > 100
  puts "no 13 is less"
end

# unless also has a modifier form
puts "no 13 is less" unless 13 > 100

# Loops ########################################################################

i = 0 # init
while i < 5 # conditional
  puts "i is currently: #{ i }"
  i += 1 # update
end

# Control-c to quit an infinite loop in Ruby
# while true
#   print "ZOMG"
# end

puts "-=" * 20

i = 0
until i == 5
  puts "i is currently: #{ i }"
  i += 1
end

# Iterators ####################################################################
# 5.times { puts "whatever" } # one-liners are for single statements

5.times do
  puts "whatever"
  puts "something else"
end

5.times do |j|
  puts "j is currently: #{ j }"
end

5.downto(0) do |i|
  puts "i is currently: #{ i }"
end

# for loops # Don't ever use these:
for i in 0..5
  puts i
end
