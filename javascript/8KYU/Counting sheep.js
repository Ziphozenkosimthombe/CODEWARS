/*
Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined
*/ 

function countSheeps(sheep) {
    if (!sheep || !Array.isArray(sheep)) {
        return 0;
    }

    let sheepCount = 0;

    for (let i = 0; i < sheep.length; i++) {
        if (sheep[i] === true) {
            sheepCount++;
        }
    }

    return sheepCount;
}


//another solution
function countSheeps(arrayOfSheeps) {
    return arrayOfSheeps.filter(Boolean).length;
}

//another solution
function countSheeps(arrayOfSheep) {
    var array = arrayOfSheep.reduce((a,b)=>a + (b===true?1:0),0)
    return array;
  }
