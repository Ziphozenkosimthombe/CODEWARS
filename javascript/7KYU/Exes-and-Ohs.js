/*
Check to see if a string has the same amount of 'x's and 'o's.
The method must return a boolean and be case insensitive.
The string can contain any char.
*/
// Convert the string to lowercase for case-insensitivity
const lowerStr = str.toLowerCase();

// Check if both 'x' and 'o' are present and occur in equal numbers
return lowerStr.split('x').length === lowerStr.split('o').length;


// another approuch
function XO(str) {
    //code here
  const lowerStr = str.toLowerCase();

  // Count the occurrences of 'x' and 'o'
  const countX = (lowerStr.match(/x/g) || []).length;
  const countO = (lowerStr.match(/o/g) || []).length;

  // Check if the counts are equal
  return countX === countO;
}