class SinglyLinkedList
  class Node
    attr_accessor :value, :next

    def initialize(value)
      @value = value
      @next = nil
    end
  end

  attr_accessor :head

  def initialize(value=nil)
    @head = Node.new(value) unless value.nil?
  end

  def prepend(value) # AKA unshift
    node = Node.new value
    node.next = @head
    @head = node
  end

  def append(value) # push
    last.next = Node.new value # slightly buggy
  end

  def last
    current_node = @head
    while current_node && current_node.next
      current_node = current_node.next
    end
    current_node
  end

  def remove # AKA: shift
    # TODO: return nil when there are no nodes left
    node = @head
    @head = node.next
    node.value
  end

  # TODO
  def insert_after(node, new_value)
  end

  # TODO
  def find(needle)
    # return the node with the value of needle (or nil)
  end

  # TODO: tricky
  def reverse # non-destructive
  end

  # TODO: trickier
  def reverse! # destructive
  end

  # TODO: trickiest -- how do you accept/invoke a block? (do/end)
  def each
  end

  # Bonus: .map, .reduce, .select, .reject
  # Bonus: bros.at_index(3) # equivalent bros[3]
end

bros = SinglyLinkedList.new 'Groucho'
bros.prepend 'Harpo'
bros.prepend 'Chico'

require 'pry'
binding.pry

# bros.each do |b|
#   puts b.upcase
# end
