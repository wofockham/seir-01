# ### 3. Sydney Suburbs
# - Create a program that asks what suburbs you live in.
# - Depending on the answer, print an appropriate response of your choosing

print "What suburb do you live in: "
suburb = gets.chomp.capitalize

# Wizardly:
puts case suburb
when "Sydney"
  "Something about casinos and cocaine"
when "Dalby"
  "Wonderful cemetery"
when "Brisbane"
  "More like Brisvegas amiright"
when "Hobart"
  "I'm retiring there"
else # default
  "I'm sure that's a nice place"
end
