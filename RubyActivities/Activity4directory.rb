# user_input = 0
# until [1,2].include? user_input do
#     puts "Please enter a 1 or a 2.>" 
#     user_input = gets.chomp.to_i
# end

# if user_input == 1    
#     puts "One response." 
# else   
#     puts "Second response." 
# end
# dial_book = {
#   "newyork" => "212",
#   "newbrunswick" => "732",
#   "edison" => "908",
#   "plainsboro" => "609",
#   "sanfrancisco" => "301",
#   "miami" => "305",
#   "paloalto" => "650",
#   "evanston" => "847",
#   "orlando" => "407",
#   "lancaster" => "717"
# }

# city_name_input = " "

# until ["close","exit","Close","Exit","CLOSE","EXIT"].include? city_name_input do
#     puts "Available City names in the Directory"
#     get_city_names(dial_book)
#     puts "\nEnter a City Name to get its Area Code: "
#     puts "Enter 'close' or 'exit' to quit"
#     print "Query: "
#     city_name_input = gets.chomp

#     puts city_name_input
# end

# user_input = 0
# until ["close","exit"].include? user_input do
#     puts "Please enter a 1 or a 2.>" 
#     user_input = gets.chomp
# end

# if user_input != "close" || user_input != "exit" 
#     puts "One response." 
# else   
#     puts "Second response." 
# end

dial_book = {
    "newyork" => "212",
    "newbrunswick" => "732",
    "edison" => "908",
    "plainsboro" => "609",
    "sanfrancisco" => "301",
    "miami" => "305",
    "paloalto" => "650",
    "evanston" => "847",
    "orlando" => "407",
    "lancaster" => "717"
  }
  
  def get_city_names(a_hash)
      puts a_hash.keys
  end
  
  def get_area_code(a_hash, key)
      puts "Area code for city: '#{key}' is #{a_hash[key]}"
  end
  
  loop do
      puts "Proceed? enter 'yes' to continue and any input to quit"
  
      prompt = gets.chomp.downcase
          if prompt == "yes"
              puts "Cities Available inside the directory: "
              get_city_names(dial_book)    #returns dial_book hash
              puts "Enter a city name to get it's area code"
              print "Query : "
              city_name_input = gets.chomp 
              if dial_book.include?(city_name_input)  #check if hash includes user input
                  get_area_code(dial_book, city_name_input) 
              else
              puts "This City Name Query doesn't exist in the directory..."
              end
              else
              puts "Exiting..."  
              break
          end
    end
  