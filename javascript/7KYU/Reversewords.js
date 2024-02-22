/** 
 * Instructions:
 * 
 * function that accept  a string parameter
 *  and reverses each word in the string
 * All spaces in the string should be retained.
 * 
 * Example:
 * 
 * "This is an example!" ==> "sihT si na !elpmaxe"
   "double  spaces"      ==> "elbuod  secaps"
*/

//Solution 1
function reverseWords(str){
    const reverseString =  str.split("").reverse().join("").split(" ").reverse().join(" ");
    return reverseString;
}

//Solution 2
function reverseWords(str){
    return str.split("").reverse().join("").split(" ").reverse().join(" ");
}

//Solution 3

const reverseWords = str => str.split("").reverse().join("").split(" ").reverse().join(" ");
