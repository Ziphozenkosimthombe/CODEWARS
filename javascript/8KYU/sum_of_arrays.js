/*
function that takes an array of numbers and returns the sum of the numbers. 
The numbers can be negative or non-integer.
If the array does not contain any numbers then you should return 0.
*/

let sum = (numbers) => numbers.reduce( (a,b) => a+b, 0)


// another solution or approuch
function sum(numbers){
    let sum = 0
    for (i = 0; i < numbers.length; i++){
        sum += numbers[i]
    }
    return sum
}