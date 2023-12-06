/*
All of the animals are having a feast! Each animal is bringing one dish.
There is just one rule: the dish must start and end with the same letters as the animal's name.
For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

Assume that beast and dish are always lowercase strings,
and that each has at least two letters. beast and dish may contain hyphens and spaces,
but these will not appear at the beginning or end of the string.
They will not contain numerals.
*/ 

function feast(beast, dish){
    //checking if the beast index 0 is equal to dish index 0
    // and also check if the last beast is equal to the last dish using slice()
    //and return true if condition is true else return false 
    if ((beast[0] === dish[0]) &&
    (beast.slice(-1) === dish.slice(-1))){
        return true
    }else{
        return false
    }
}

//another way
const feast = (beast, dish) => ((beast[0] === dish[0]) &&
(beast.slice(-1) === dish.slice(-1))) ? true : false