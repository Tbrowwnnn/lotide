
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

module.exports = middle;


