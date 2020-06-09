require 'pry' # require the Gem into this ruby program

def show_menu
  puts "Calculator"
  puts "-=" * 40 # El cheapo horizontal dividing line
  puts "[a] - addition"
  # TODO: Add other options
  puts "[q] - quit"
  print "Enter your choice: "
end

show_menu
menu_choice = gets.chomp.downcase

until menu_choice == 'q'
  # do calculating: TODO: homework goes here
  case menu_choice
  when 'a'
    puts "Addition coming soon" # TODO: actual addition here
  else
    puts "Invalid selection. You idiot."
  end

  show_menu
  menu_choice = gets.chomp.downcase
end

# binding.pry # pause the program at this line INSIDE pry
puts "Thanks for using crappy calculator!"
