function padIt (str, n) {
  let odd = 0

  while (odd < n) {
    if (odd % 2 === 0) {
      str = "*" + str
    } else {
      str =  str + "*" 
    }
    odd += 1
  }

  return str
}
