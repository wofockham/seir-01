# Modify the previous program to allow Fred to match as well. Does it match now if your input string is Fred, frederick, or Alfred?

ARGF.each do |line|
  puts line if line =~ /[fF]red/ # Character class
end
