/*
function should return true if you are employed and not on vacation
(because these are the circumstances under which you need to set an alarm).
It should return false otherwise.
*/
function setAlarm(employed, vacation){
    if (employed === true && vacation === true)
      return false
    else if (employed === true && vacation === false)
      return true
    else if (employed === false && vacation === true)
      return false
    else if (employed === false && vacation === false )
      return false
  }