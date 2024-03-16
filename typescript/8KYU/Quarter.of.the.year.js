"use strict";
/**
    Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

    For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

    Constraint:

1 <= month <= 12
 * */
Object.defineProperty(exports, "__esModule", { value: true });
exports.quarterOf = void 0;
function quarterOf(month) {
    if (month <= 3) {
        return 1;
    }
    else if (month <= 6) {
        return 2;
    }
    else if (month <= 9) {
        return 3;
    }
    else {
        return 4;
    }
}
exports.quarterOf = quarterOf;
// solution 2
// export function quarterOf(month: number): number {
//     if (month === 1 || month === 2 || month === 3){
//       return 1
//     }else if(month === 4 || month === 5 || month === 6){
//       return 2
//     } else if(month === 7 || month === 8 || month === 9){
//       return 3
//     }else{
//       return 4
//     }
//     // Your code here
//   }
//     // solution 3
//     export function quarterOf(month: number): number {
//         return Math.ceil(month / 3);
//       }
