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

console.log(flatten([1, 2, [3, 4], 5, [6]]));
console.log(flatten([1, 2, [3, 4, 5, 7], 5, [6]]));

assertArraysEqual(eqArrays(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]));
assertArraysEqual(eqArrays(flatten([1, 2, [3, 4, 5, 7], 5, [6]]), [1, 2, 3, 4, 5, 7, 5, 6]));