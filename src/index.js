
exports.min = function min (array) {
  let minimum=Infinity;
  for(let i=0; i< array.length; i++){
    if (array[i]<minimum)
     minimum=array[i];
  }
  return minimum;
}

exports.max = function max (array) {
  let maximum=0;
  for(let i=0; i< array.length; i++){
    if (array[i]>maximum)
     maximum=array[i];
  }
  return maximum;
}

exports.avg = function avg (array) {
  return 0;
}
