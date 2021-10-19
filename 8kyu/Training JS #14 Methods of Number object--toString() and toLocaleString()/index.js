function colorOf(r,g,b){
  //coding here
  var r1 = r.toString(16);
  var g1 = g.toString(16);
  var b1 = b.toString(16);
  r1 = r1.length == 1 ? '0' + r1 : r1;
  g1 = g1.length == 1 ? '0' + g1 : g1;
  b1 = b1.length == 1 ? '0' + b1 : b1;
  return "#" + r1 + g1 + b1
}
