const eqArrays = function(array1, array2) {

  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;

    }
  } return true;
};

const assertArraysEqual = function(response) {
  if (response === true) {
    console.log(`✅✅✅ both of these Arrays match`);
  } else console.log(`❌❌❌ These Arrays don't match`);
};

const without = function(source, itemsToRemove) {
  let finalArray = [];


  for (let i = 0; i < source.length; i++) {

    let canIAdd = true;

    for (let j = 0; j < itemsToRemove.length; j++) {
      if (itemsToRemove[j] === source[i]) {
        canIAdd = false;
        break;
      }

    } if (canIAdd) {
      finalArray.push(source[i]);
    }

  } return finalArray;



};

const words = ["It's", "a", "beautiful", "Snowy", "Morning"];
console.log(without(words, ["beautiful"]));

assertArraysEqual(eqArrays(words, ["It's", "a", "beautiful", "Snowy", "Morning"]));
// assertArraysEqual(eqArrays(finalArray, ["It's", "beautiful", "Snowy", "Morning"]));



console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"]));
console.log(without(["Tyler", "Brown", "is", "not", "awesome"], ["not"])); // => ["1", "2"]
// assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3])); // => true
// assertArraysEqual(eqArrays([1, 2, 3], [3, 2, 1])); // => false

// assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
// assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false
// assertArraysEqual(eqArrays(["1", "2", "3", "4"], ["1", "2", 3])); // => false