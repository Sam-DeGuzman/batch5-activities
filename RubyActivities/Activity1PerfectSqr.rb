#define
def get_sqrt(num)
    
    sqr_constant = 0.5
    
    sqr_root = num ** 0.5
    
    return sqr_root.to_f

end

# puts get_sqrt(81)

def get_perf_square(x)
    result = false

    if x < 0
    return false
    end

    sqrt = get_sqrt(x)

    result = x == sqrt * sqrt

    return result
end

puts get_perf_square(-1)
puts get_perf_square(0)
puts get_perf_square(3)
puts get_perf_square(4)
puts get_perf_square(25)
puts get_perf_square(26)
