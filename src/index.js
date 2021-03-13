exports.min = function min (array) {
    if (array === undefined || array.length === 0) return 0;
  if (array.length > 0) {
      return Math.min.apply(null, array);
  }
}

exports.max = function max (array) {
    if (array === undefined || array.length === 0) return 0;
   if (array.length > 0) {
       return Math.max.apply(null, array);
 }
}
exports.avg = function avg (array) {
  let i = 0;
  let avrg = 0;
  if (array === undefined || array.length === 0) return 0;
  else {
      while (i < array.length) {
        avrg += array[i];
        i++;
      }
      return avrg / array.length;
    }
}
