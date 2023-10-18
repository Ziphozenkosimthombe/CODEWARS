/* Build a pyramid-shaped tower, as an array/list of strings,
given a positive integer number of floors. A tower block is represented
with "*" character. */
function towerBuilder(nFloor){
    let space = ""
    let star = ""
    let finalResult = []
    for (let i = 1; i <= nFloor; i++){
        space = (" ").repeat(nFloor - i)
        star = ("*").repeat((i * 2) -1)
        finalResult.push(space + star + space)
    }
    return finalResult
}