/*
Given an integral number, determine if it's a square number: 
*/
function isSquare(n){
    if (Math.sqrt(n) % 1 === 0)
        return true
    return false
}