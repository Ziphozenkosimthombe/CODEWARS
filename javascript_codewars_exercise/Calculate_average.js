/*
function which calculates the average of the numbers in a given list.
Empty arrays should return 0.
*/

let findAvarage = (arr) =>{
    let sum = arr.reduce( (a,b) => a+b, 0);
    let avrg = (sum / arr.length) || 0;
    return avrg
}