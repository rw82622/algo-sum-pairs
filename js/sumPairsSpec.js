var sp = require("./sumPairs");
var shallowEqualArrays = require("shallow-equal/arrays");

// Don't forget to add your tests :)
console.log(
  shallowEqualArrays(
    JSON.stringify(sp.sumPairs([1, 2, 3, 4, 5], 9)),
    JSON.stringify([[4, 5]])
  )
);
