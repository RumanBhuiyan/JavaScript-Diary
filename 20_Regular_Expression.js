 //Learning from : https://www.youtube.com/watch?v=5ckmCW8png0&ab_channel=LearnwithSumit


// 1. // ;javascript treats it as Regular Expression

// 2. //g ;g flag menas search globally

// 3. //gi ;i flag means search without case sensitivity

// 4. /color/ ;find exact match of 'color'

// 5. '/color | Color/' ;here | (OR operator is also valid)

// 6. /(color | Color) blind/ ; firstly find 'color' or 'Color' then space then 'blind'

// 7. /\w/ ; small 'w' find All words

// 8. /\W/ ; capital 'W' find everything except words

// 9. /\d/ ; finds digits only

// 10. /\D/ ; finds everything except digits

// 11. /\s/ ; finds space only

// 12. /\S/ ; finds everything except Spaces

// 13. /\n/ ; finds newline

// 14. /\t/ ; finds tabs

// 15. /[a-z]/ ; Select any sequence that starts with any character within a to z 

// 16. /[a-gA-Z]/ ; select a-g or A-Z

// 17. /[^a-z]/ ; select any sequence that doesn't have a-z

// 18. /colou?r/ ; ? means finds 0 or one occurance of 'u' 

// 19. /colou*r/ ; * means find 0 or multiple occurance of 'u'

// 20. /colou+r/ ; + means find 1 or multiple occurance of 'u'

// 21. /colour{2}/ ; finds those strings which hold 2 'r's at end

// 22.  /colour{2-5}/ ; finds those string which hold minimum 2 'r's and maximum 5 'r's 

// 23. /colours\?/ : \? escape ? as keyword ,treat it as a character

// 24. /color/m ; m flag search in multiline

// 25.  /^my/gim ; find the strings in multiline that starts with 'my'

// 26.  /my$/gim ; find those strings that ends with my 

// Four Methods are used in Javascript to find strings by RegEx

  const text = '#2A2A2A' 
  const regex = /#?([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})/g

  const matches =text.match(regex) ; // returns an array of matches

  const index = text.search(regex) ; // return the index where founded

  const replaced = text.replace(regex,'#000000') ; //find and replace

  const testing = regex.test(text); //returns true or false
  
// Lets check any zip code of america is valid or not
// some valid zip code of america from internet : 
// 35801 thru 35816  99501 thru 99524  85001 thru 85055	72201 thru 72217 83254

let code = "35801 thru 35816";
let regularExp = /(\d{5}) (thru)? (\d{0,5})|\d{5}/g;

console.log(regularExp.test(code))
