
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



const middle = function(array) {
  let middleNumbers = [];
  const middleLength = Math.round(array.length / 2) - 1; //determines where the loop starts
  //if less then 2 elements then return nothing.
  if (array.length < 3) {
    return middleNumbers;
  }
  //if even, return two numbers starting from middle
  if (array.length % 2 === 0) {
    for (let i = middleLength; i < middleLength + 2; i++) {

      middleNumbers.push(array[i]);

    } return middleNumbers;
  }
  //if odd, return one number from middle
  for (let j = middleLength; j < middleLength + 1; j++) {

    middleNumbers.push(array[j]);
  } return middleNumbers;
};

assertArraysEqual(eqArrays(middle([1, 2]),[]));
assertArraysEqual(eqArrays(middle([1]),[]));
assertArraysEqual(eqArrays(middle([1, 2, 3, 4, 5, 6, 7]), [4]));
assertArraysEqual(eqArrays(middle([1, 2, 3, 4, 5, 6, 7, 8]), [4, 5]));
assertArraysEqual(eqArrays(middle([15, 27, 35, 43, 58, 68, 71, 80]), [43, 58]));
assertArraysEqual(eqArrays(middle([15, 27, 35, 43, 58, 68, 71, 80, 99]), [58]));

//We need to determine the middle of the array

//Empty array to return

//Determine if it is odd or even
//count the length of the array and divide by 2

//Return one element if odd and two elements if even

//Return empty array if less than 3 elements

// const words = ["It's", "a", "beautiful", "Snowy", "Morning"];
// console.log(without(words, ["beautiful"]));

// assertArraysEqual(eqArrays(words, ["It's", "a", "beautiful", "Snowy", "Morning"]));


// assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3])); // => true
// assertArraysEqual(eqArrays([1, 2, 3], [3, 2, 1])); // => false

// assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
// assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false
// assertArraysEqual(eqArrays(["1", "2", "3", "4"], ["1", "2", 3])); // => false