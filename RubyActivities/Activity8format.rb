
nameHashArr = [{name: "Josh"},{name: "Bert"}, {name: "Maggie"}]
nameHashArr2 = [{name: "Josh"},{name: "Bert"}]

def format_as_list(array)
    arrlength = array.length()
    str_cont = ""
    array.each_with_index { | value, index |
        if index == 0
            str_cont = value[:name]
        elsif index == (arrlength - 1)
            str_cont = str_cont + " & " + value[:name]
        else
            str_cont = str_cont + ", " + value[:name]
        end
    }
    puts str_cont
end

format_as_list(nameHashArr)
format_as_list(nameHashArr2)