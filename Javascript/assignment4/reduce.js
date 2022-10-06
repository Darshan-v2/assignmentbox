var arr = [20, 20, 2, 3];

Array.prototype.Reduce = function (callback) {
  var acc;
  for (i = 0; i < this.length; i++) {
    if (acc !== undefined)
      acc = callback.call(undefined, acc, this[i], i, this);
    else
      acc = this[i];
  }
  return acc;
};

var total = arr.Reduce(function (a, b) {
  return a + b;
});
console.log(total);