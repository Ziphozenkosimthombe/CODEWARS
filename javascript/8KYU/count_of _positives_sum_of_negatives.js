/*
Return an array, where the first element is the count of positives numbers
and the second element is sum of negative numbers. 0 is neither positive nor
negative.

If the input is an empty array or is null, return an empty array.
*/

function countPositivesSumNegatives(arr){
    let newArr = []
    let positiveNumber = 0
    let negativeNumber = 0

    if (arr === null || arr.length === 0){
        return newArr
    }

    for (let i = 0; i < arr.length; i++){
        if (arr[i] === 0)
            continue
        else if (arr[i] > 0)
            positiveNumber++
        else
            negativeNumber += arr[i]
    }
    newArr.push(positiveNumber)
    newArr.push(negativeNumber)
    return newArr
}