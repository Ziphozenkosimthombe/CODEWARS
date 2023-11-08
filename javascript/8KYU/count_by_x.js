/*
function with two arguments that will return an array of the first n multiples of x.
Assume both the given number and the number of times to count will be positive
numbers greater than 0.

Return the results as an array or list
*/

function countBy(x, n){
    const multiples = []
    if (x > 0 && n > 0){
        for (let i = 1; i <= n; i++){
            multiples.push(x * i)
        }
    }
    return multiples
}