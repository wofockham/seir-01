# Greeting program to experiment with input and output

print "What is your name: " # print() does not a trailing new line.
name = gets.chomp # Using chaining to read a string and remove the new line.

puts "Thank you for entering your name, #{ name }."

print "What is your surname: "
surname = gets.chomp

puts "Your full name is #{ name } #{ surname }."

print "What is your address: "
address = gets.chomp

puts "Your name is #{ name } #{ surname } and you live at #{ address }."
