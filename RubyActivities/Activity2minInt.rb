def minimum(list)
    current_min = list[0]  

    list.each do |num|
      num < current_min ? current_min = num : num
    end
    puts current_min
end
  print minimum([-12,-23,3,123])  