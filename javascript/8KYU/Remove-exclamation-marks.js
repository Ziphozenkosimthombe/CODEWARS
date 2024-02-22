/**
 * Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
 *  
 */ 

//Solution 1

function removeExclamationMarks(s) {
    return s.split("!").join("");
}

//Solution 2
function removeExclamationMarks(s) {
    let newStr = s.replace(/!/g, "");
    return newStr;
}