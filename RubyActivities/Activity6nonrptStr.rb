def first_nonrepeating_letter(str) 
    str.each_char do |chr|
      return chr if str.downcase.count(chr.downcase) < 2
    end
    "_"
  end

puts first_nonrepeating_letter("ddjjrrvv") # => _ 
puts first_nonrepeating_letter("ddjrrv")  # => j