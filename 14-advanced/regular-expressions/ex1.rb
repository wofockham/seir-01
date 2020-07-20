# lr.rb - A Ruby line reader (equivalent to cat)
# Usage: ruby lr.rb somefile.txt

ARGF.each do |line|
  puts line if line =~ /e/
end
