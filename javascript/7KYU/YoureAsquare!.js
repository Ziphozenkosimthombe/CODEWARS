const isSquare = n => n === 0 ? true : Math.sqrt(n) % 1 === 0;

// Other solution
// const isSquare = n => Number.isInteger(Math.sqrt(n));