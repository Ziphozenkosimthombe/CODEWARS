/*
If the parameter is itself not a perfect square then -1 should be returned.
You may assume the parameter is non-negative.

Examples:(Input --> Output)

121 --> 144
625 --> 676
114 --> -1 since 114 is not a perfect square
*/ 

function findNextSquare(sq) {
    // Find the square root of the input
    const sqrt = Math.sqrt(sq);
  
    // Check if the square root is an integer
    if (Number.isInteger(sqrt)) {
      // Find the next perfect square
      const nextSquare = Math.pow(sqrt + 1, 2);
      return nextSquare;
    } else {
      // If the input is not a perfect square, return -1
      return -1;
    }
}


//another approuch
function findNextSquare(sq) {
    let r = Math.sqrt(sq)
    return r % 1 ? -1 : ++r * r
}