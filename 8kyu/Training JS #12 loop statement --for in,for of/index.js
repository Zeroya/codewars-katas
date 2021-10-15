function giveMeFive(obj){
  //coding here
  var bag = [];
  for (var value in obj) {
    if ( value.length === 5) {
      bag.push(value)
    }
    if ( obj[value].length === 5) {
      bag.push(obj[value])
    }
  }
  return bag
}
