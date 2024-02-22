/**
 * 
 * instructions:
 * 
 * Given two integers a and b, which can be positive or negative, find the sum of all the numbers between including them too and return it.
 * If the two numbers are equal return a or b.
 * Note: a and b are not ordered!
 * 
 */

// My solution:
function getSum(a, b){
    //Good luck!
   if (a === b){
     return a
   }else{
      // Find the minimum and maximum values between a and b
     let min = Math.min(a, b);
     let max = Math.max(a, b);
     
     // Initialize sum
     let sum = 0;
     
     // Iterate through all integers between min and max, including them, and add them to the sum
     for (let i = min; i <= max; i++) {
       sum += i;
     }
     
     return sum;
   }
 }

 //Other solutions
    function GetSum( a,b )
    {
    //If a and b are equal, return a
    if (a == b) return a;
    //If a is greater than b, swap the values of a and b
    if (a > b) {
        let temp = a;
        a = b;
        b = temp;
    }
    //Use the formula for the sum of an arithmetic series to find the sum of all integers between a and b, including them
    return (b - a + 1) * (a + b) / 2;
    }

