/*
Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

The binary number returned should be a string.

Examples:(Input1, Input2 --> Output (explanation)))

1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)
*/ 

const binary = (num1 , num2) => (num1 + num2).toString(2);

// Other solution

const addBinary = (a, b) => {
    let binaryNum1 = a.toString(2);
    let binaryNum2 = b.toString(2);

    let sum = parseInt(binaryNum1, 2) + parseInt(binaryNum2, 2).toString(2);

    return sum;
}