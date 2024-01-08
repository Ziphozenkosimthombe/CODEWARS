/*
Thanks to the effects of El Nino this year my holiday snorkelling trip was akin to being in a washing machine... Not fun at all.

Given a string made up of '~' and '_' representing waves and calm respectively, your job is to check whether a person would become seasick.

Changes from calm to wave or wave to calm will add to the effect (really wave peak to trough but this will do). Find out how many changes in level the string has and if that number is more than 20% of the length of the string, return "Throw Up", else return "No Problem".
*/


function seaSick(x){
    let changes = 0;
  
      for (let i = 1; i < x.length; i++) {
          if (x[i - 1] !== x[i]) {
              changes += 1;
          }
      }
  
      if (changes / x.length > 0.2) {
          return "Throw Up";
      } else {
          return "No Problem";
      }
  
  }
  
  const seaCondition = "~~~~_~~~__~~~";
  const result = seaSick(seaCondition);
  console.log(result);


  //another solution

  function seaSick(x){
    var a = x.split("_~").length-1
    var b = x.split("~_").length-1
    return (a+b)/x.length>0.2?"Throw Up":"No Problem"
    }


    //another solution
    function seaSick(x){
        var count = 0;
        
        x.split('').reduce(function(first, second) {
          first != second ? ++count : count;
          return second;
        });
        
        if ((count / x.length) * 100 > 20) {
          return "Throw Up";
        }
        
        return "No Problem";
      }