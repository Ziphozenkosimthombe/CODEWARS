/*
A hero is on his way to the castle to complete his mission. However,
he's been told that the castle is surrounded with a couple of
powerful dragons! each dragon takes 2 bullets to be defeated,
our hero has no idea how many bullets he should carry..
Assuming he's gonna grab a specific given number of bullets
and move forward to fight another specific given number of dragons, will he survive?

Return true if yes, false otherwise :)
*/ 

function hero(bullets, dragons){
    //we are chacking if the bullets of the hero is twice than number the dragons
    //and return true if bullets are twice than the number of the dragons else return false
    let num = dragons * 2
    if ( bullets >= num){
        return true
    }else{
        return false
    }
}

// another way or solution
let hero = (bullets,dragons) => (bullets >= dragons * 2) ? true : false