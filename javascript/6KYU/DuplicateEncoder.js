/*
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
*/ 

function duplicateEncode(word){
    let toLowe = word.toLowerCase()
    let encoded = ""
    for (let i = 0; i < toLowe.length; i++){
      let count = 0
      for (let k = 0; k < toLowe.length; k++){
        if (toLowe[k] === toLowe[i]){
          count++
        }
      }
      encoded += count > 1 ? ")" : "("
    }
   return encoded
 }

// Other solution
const duplicateEncode = word => word.toLowerCase().split('').map((el, i, arr) => arr.indexOf(el) === arr.lastIndexOf(el) ? '(' : ')').join('')