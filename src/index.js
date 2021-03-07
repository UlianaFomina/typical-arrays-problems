
exports.min = function min (array) {
  let minimum=Infinity;
  for(let i=0; i< array.length; i++){
    if (array[i]<minimum)
     minimum=array[i];
  }
  return minimum;
}

exports.max = function max (array) {
  return 0;
}

exports.avg = function avg (array) {
  return 0;
}
