/*
Create a Function that takes one parameter and returns its square root rounded to 5 decimal places. You are not allowed to use the Math.sqrt() or the Math.pow() methods.   
*/ 

function squareRoot(x) {
    let a = (x ** 0.5);
    let b = a.toFixed(5);
    let c = parseFloat(b);
    return c;
  }

//another solution
const squareRoot = x => +(x ** .5).toFixed(5)