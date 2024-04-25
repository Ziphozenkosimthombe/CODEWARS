const puk = (s) =>{
    s = s.trim()
    if (!s) return ""

    let arr = s.split(' ')
    let result = ""
    for (let i = 0; i < arr.length; i++){
        result += arr[i]
        if (i < arr.length - 1){
            result += " puk "
        }
    }
    return result
}