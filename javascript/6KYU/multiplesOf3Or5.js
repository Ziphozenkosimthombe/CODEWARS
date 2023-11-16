/*If we list all the natural numbers below 10
that are multiples of 3 or 5, we get 3, 5, 6 and 9.
The sum of these multiples is 23.*/

function solution(number){
    // Check if the number is negative
    if (number < 0) {
      return 0;
    }
  
    // Initialize sum
    let totalSum = 0;
  
    // Iterate through numbers below n
    for (let i = 0; i < number; i++) {
      // Check if the number is a multiple of 3 or 5
      if (i % 3 === 0 || i % 5 === 0) {
        // Add the multiple to the sum
        totalSum += i;
      }
    }
  
    return totalSum;
    
  }