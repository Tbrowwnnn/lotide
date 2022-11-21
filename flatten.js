const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const flatten = function(arrays) {
  let flattenedArray = [];

  for (let index = 0; index < arrays.length; index++) {

    if (Array.isArray(arrays[index])) {

      for (let i = 0; i < arrays[index].length; i++) {

        flattenedArray.push(arrays[index][i]);

      }

    } else {
      flattenedArray.push(arrays[index]);
    }

  } return flattenedArray;
};

module.exports = flatten;

console.log(flatten([1, 2, [3, 4], 5, [6]]));
console.log(flatten([1, 2, [3, 4, 5, 7], 5, [6]]));

assertArraysEqual(eqArrays(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]));
assertArraysEqual(eqArrays(flatten([1, 2, [3, 4, 5, 7], 5, [6]]), [1, 2, 3, 4, 5, 7, 5, 6]));