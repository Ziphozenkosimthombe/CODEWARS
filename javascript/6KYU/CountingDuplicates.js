/*
Write a function that will return the count of distinct case-insensitive
alphabetic characters and numeric digits that occur more than once in the input
string. The input string can be assumed to contain only alphabets
(both uppercase and lowercase) and numeric digits.
*/ 


function duplicateCount(text){
    //...
    const lowerCaseString = text.toLowerCase();
    
    // Use an object to store the count of each character
    const charCount = {};
    
    // Iterate through each character in the string
    for (const char of lowerCaseString) {
      // Ignore non-alphabetic and non-numeric characters
      if (/^[a-z0-9]$/.test(char)) {
        // Increment the count for the current character
        charCount[char] = (charCount[char] || 0) + 1;
      }
    }
    
    // Count the characters that occur more than once
    let duplicateCount = 0;
    for (const count of Object.values(charCount)) {
      if (count > 1) {
        duplicateCount++;
      }
    }
    
    return duplicateCount;
  }