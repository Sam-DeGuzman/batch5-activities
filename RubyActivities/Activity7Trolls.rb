def disemboweled_trolls(str)
    puts str.tr 'aeiouAEIOU',''
end

disemboweled_trolls("troll comment jibberish!!! ")