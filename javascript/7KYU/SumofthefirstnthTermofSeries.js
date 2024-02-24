/**
 * Task:
 * Your task is to write a function which returns the sum of following series upto nth term(parameter).
 * Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
 * 
 * You need to round the answer to 2 decimal places and return it as String.
 * If the given value is 0 then it should return 0.00
 * You will only be given Natural Numbers as arguments.
*/ 

//solution1
function SeriesSum(n) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += 1 / (1 + i * 3)
    }
    return sum.toFixed(2)
}