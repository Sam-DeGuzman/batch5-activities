require 'set'

def find_unique_value(arr)
    uniq_set = Set.new(arr)
    uniq_set.each do |num|
        if arr.count(num) == 1
            return num
        end
    end
end
puts find_unique_value([2,2,2,1,2,2,2])
puts find_unique_value([2,2,2,2,2,2,4])
