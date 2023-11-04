/*
function should return true if you are employed and not on vacation
(because these are the circumstances under which you need to set an alarm).
It should return false otherwise.
*/
function setAlarm(employed, vacation){
    return (employed && !vacation) ? true : false;
  }