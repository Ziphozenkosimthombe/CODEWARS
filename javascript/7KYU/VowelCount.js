/**
 * Write a function that returns the number of vowels used in a string.
 * Vowels are the following characters: 'a', 'e', 'i', 'o', and 'u'.
 * 
 * The input string will only consist of lower case letters and/or spaces.
*/ 

//solution1
function getCount(str){
    let vowelsCount = 0;
    let vowels = ['a', 'e', 'i', 'o', 'u'];

    for (let char of str){
        if (vowels.includes(char)){
            vowelsCount += 1
        }
    }
    return vowelsCount
}

//solution2
function getCount(str){
    return str.split('').filter(c => "aeiou".includes(c)).length
}

//solution3
function getCount(str){
    return (str.match(/[aeiou]/ig) || []).length
}