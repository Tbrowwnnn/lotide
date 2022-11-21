const assertArraysEqual = require('../assertArraysEqual');
const eqArrays = require('../eqArrays');
const middle = require('../middle');

assertArraysEqual(eqArrays(middle([1, 2]),[])); // ==> true
assertArraysEqual(eqArrays(middle([1]),[])); // ==> true
assertArraysEqual(eqArrays(middle([1, 2, 3, 4, 5, 6, 7]), [4])); // ==> true
assertArraysEqual(eqArrays(middle([1, 2, 3, 4, 5, 6, 7, 8]), [4, 5])); // ==> true
assertArraysEqual(eqArrays(middle([15, 27, 35, 43, 58, 68, 71, 80]), [43, 58])); // ==> true
assertArraysEqual(eqArrays(middle([15, 27, 35, 43, 58, 68, 71, 80, 99]), [59])); // ==> false