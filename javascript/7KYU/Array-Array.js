/*
You are given an initial 2-value array (x). You will use this to calculate a score.

If both values in (x) are numbers, the score is the sum of the two. If only one is a number, the score is that number. If neither is a number, return 'Void!'.

Once you have your score, you must return an array of arrays. Each sub array will be the same as (x) and the number of sub arrays should be equal to the score.

For example:

if (x) == ['a', 3] you should return [['a', 3], ['a', 3], ['a', 3]].
*/ 

function explode(x){
    if (typeof x[0] === 'number' && typeof x[1] === 'number') {
          // Calculate the score
          const score = x[0] + x[1];
          // Create an array of arrays with the same elements as x
          const result = Array.from({ length: score }, () => x);
          return result;
      }
      // Check if only one value is a number
      else if (typeof x[0] === 'number') {
          const result = Array.from({ length: x[0] }, () => x);
          return result;
      } else if (typeof x[1] === 'number') {
          const result = Array.from({ length: x[1] }, () => x);
          return result;
      }
  // If neither is a number, return 'Void!'
      else {
          return 'Void!';
      }
  
  }


//another solution
function explode(x){
    if (typeof x[0] === 'number' && typeof x[1] === 'number') {
      return Array(x[0] + x[1]).fill(x);
    }
    
    if (typeof x[0] === 'number') {
      return Array(x[0]).fill(x);
    }
    
    if (typeof x[1] === 'number') {
      return Array(x[1]).fill(x);
    }
    
    return 'Void!';
  }

  //another solution
    
  function explode(x){
 

    if( typeof x[0] =='string' && typeof x[1] =='string'){
     return 'Void!'
    }
     const num = x.filter((el,i)=>typeof el == 'number').reduce((prev,curr)=>prev+curr,0);
     const result = Array(num).fill(x)
     return result  
     
     
 }