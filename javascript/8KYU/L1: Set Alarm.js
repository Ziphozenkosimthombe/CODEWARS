/**
 * Write a function named setAlarm which receives two parameters.
 * The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.
 * 
*/ 


//solution1
function setAlarm(employed, vacation){
    if (employed === false || vacation === true){
      return false
        
    }
    else if (employed === true || vacation === false){
      return true
    }
    else{
      return false
    }
  }

//solution2
function setAlarm(employed, vacation){
    return employed && !vacation
}

//solution3
const setAlarm = (employed, vacation) => employed && !vacation