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

