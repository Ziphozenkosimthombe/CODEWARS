/**
 * Personalized Message
 * Create a function that gives a personalized greeting. This function takes two parameters: name and owner.
 * Use conditionals to return the proper message:
 * 
*/ 

//solution1
function greet (name, owner) {
    if (name === owner) {
        return 'Hello boss';
    } else {
        return 'Hello guest';
    }
}

//solution2
const greet = (name, owner) => name === owner ? 'Hello boss' : 'Hello guest'
