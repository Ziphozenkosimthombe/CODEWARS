/*
Timmy & Sarah think they are in love, but around where they live,
they will only know once they pick a flower each. If one of the flowers
has an even number of petals and the other has an odd number of petals
it means they are in love.
//function that will take the number of petals of each flower and return true if they are in love and false if they aren't. 
*/
// we are going to task flower1 and 2 
// compere both of them see which on have the even number and which one does not have the even numbr
// and if flower1 is even and flower2 is odd we return true they are in love
function lovefunc(flower1, flower2){
    // moment of truth
    return (flower1 % 2 === 0 && flower2 % 2 !== 0) ||
    (flower1 % 2 !== 0 && flower2 % 2 === 0) 
}
//another solotion
let lovefunc = (flower1, flower2) =>{
    let num = flower1 + flower2
    if (num % 2 === 0){
        return false
    }else{
        return true
    }
}