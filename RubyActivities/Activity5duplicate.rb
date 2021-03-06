arr = [ 1, 4, 3, 4, 1 ] #answer should be 4
arr2 = [2, 2, 4, 5, 4] #answer should be 2
arr3 = [3, 1, 9, 0, 5] #answer should be -1
 
def find_first_dup(num_arr)
    set = []
    num_arr.each do |value|
        return value if set[value] #return value if it exists already in the set 'Array'
        set[value] = true 
    end
    return -1           
end

print "Number Fastest to duplicate is: "
puts find_first_dup(arr)