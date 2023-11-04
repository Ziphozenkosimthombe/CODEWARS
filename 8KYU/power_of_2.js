/*
 function that takes a non-negative integer n as input,
 and returns a list of all the powers of 2 with the exponent ranging
 from 0 to n ( inclusive ).
*/

function powerOfTwo(n){
    let results = []
    for (let i = 0; i <= n; i++){
        results.push(2**i)
    }
    return results
}