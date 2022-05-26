exports.sumPairs = function (arr, target) {
  let res = [];
  for (let currentIndex = 0; currentIndex < arr.length; currentIndex++) {
    if (arr.indexOf(target - arr[currentIndex], currentIndex + 1) > 0) {
      res.push([arr[currentIndex], target - arr[currentIndex]]);
    }
  }
  return res;
};
