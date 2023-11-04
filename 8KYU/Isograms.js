/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
Implement a function that determines whether a string that contains only letters is an isogram
 Assume the empty string is an isogram.
*/
function isogram(str){
    return !str.match(/([a-z]).*\1/i);
}