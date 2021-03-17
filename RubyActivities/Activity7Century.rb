 def centuryFromYear(year)
     if (year % 100) == 0

       ans =  year / 100
        if ans.to_s.slice(-1) == "1"
            puts ans.to_s + "st century" 
        elsif ans.to_s.slice(-1) == "2"
            puts ans.to_s + "nd century" 
        elsif ans.to_s.slice(-1) == "3"
            puts ans.to_s + "rd century" 
        else
            puts ans.to_s + "th century" 
        end
   
    else 
       ans2 = (year - (year % 100))/100 + 1
       if ans2.to_s.slice(-1) == "1"
        puts ans2.to_s + "st century" 
       elsif ans2.to_s.slice(-1) == "2"
        puts ans2.to_s + "nd century" 
       elsif ans2.to_s.slice(-1) == "3"
        puts ans2.to_s + "rd century" 
       else
        puts ans2.to_s + "th century" 
    end
end 

  end

  centuryFromYear(2012)
  centuryFromYear(1)
  centuryFromYear(101)
  centuryFromYear(1990)