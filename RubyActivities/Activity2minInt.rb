def minimum(list)
    current_min = list[0]  

    list.each do |num|
      if num < current_min
        current_min = num  
      end
    end
    puts current_min
end
  print minimum([1,212,3,123])  