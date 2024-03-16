/**
 Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
 * */ 


export function grow(arr: number[]): number{
    let initialValue: number = 1;
    return arr.reduce((acc, curr) => acc * curr, initialValue)
}

console.log(grow([1, 2, 3, 4]))