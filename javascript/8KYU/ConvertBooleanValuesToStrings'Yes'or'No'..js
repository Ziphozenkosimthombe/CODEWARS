/**
 * Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
*/ 

//solution1
function booleanWord(bool){
    if (bool === true) {
        return 'Yes'
    }else{
        return 'No'
    }
}

//solution2

const booleanWord = bool => bool ? 'Yes' : 'No';