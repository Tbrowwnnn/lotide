const words = ["ground", "control", "to", "major", "tom"];


const maps = function(array, callback){

  const results = [];

  for(let item of array){


  results.push(callback(item));

  }
  
  return results;
 } 

const results1 = maps(words, word => word[0]);
console.log(results1);


const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

module.exports = maps;




assertArraysEqual(eqArrays(results1, ['g','c','t','m','t'])) // => true
// assertArraysEqual(eqArrays([1, 2, 3], [3, 2, 1])) // => false

// assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
// assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", 3])) // => false
// assertArraysEqual(eqArrays(["1", "2", "3", "4"], ["1", "2", 3])) // => false