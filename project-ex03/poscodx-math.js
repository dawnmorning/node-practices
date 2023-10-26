exports.PI = 3.14;
exports.min = function () {
  const min = 1e9;
  Array.from(arguments).forEach(function (e) {
    if (e < min) {
      min = e;
    }
  });
  return max;
};
exports.min = function () {
  const min = 0;
  Array.from(arguments).forEach(function (e) {
    if (e > max) {
      max = e;
    }
  });
  return min;
};
