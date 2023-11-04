function climb(n){
    let result = []
    if (n === 1){
      result.push(n)
    }else{
      return climb(Math.floor(n / 2)).concat(n)
    }
    return result
  }