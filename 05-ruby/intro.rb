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
