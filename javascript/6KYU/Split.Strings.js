/**
    Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

    Examples:

    * 'abc' =>  ['ab', 'c_']
    * 'abcdef' => ['ab', 'cd', 'ef']
 */ 


// function isOdd(num){
//     return num % 2 !== 0;
// }

function solution(str){
    let result = []; // create an empty array to store the pairs
    for (let i = 0; i < str.length; i += 2) { // loop through the string by 2
        let pair = str[i] + (str[i + 1] || '_'); // create a pair by concatenating the current character with the next character or an underscore if the next character is undefined
        result.push(pair); // push the pair to the result array
    }
    return result;
}




// Another solution
function solution(str){
    let arr = str.match(/.{1,2}/g);
    
    
     if (str.length == 0) {
       return []
     } else if(isOdd(str.length) == 1) {
        let x = str + "_"
        return arr = x.match(/.{1,2}/g);
     } else {
        return arr;
     }
     
  }
  
  function isOdd(num) { return num & 1; };