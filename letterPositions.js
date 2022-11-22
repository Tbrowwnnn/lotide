const assertEqual = require('./assertEqual');

const letterPositions = function(sentence) {//create a function that will count letters
  let letterCount = {};


  for (let letter in sentence) {//build a for loop to cycle through the string

    if (sentence[letter] !== " ") { //for each letter in the string skip spaces
      //letterCount[sentence[letter]].push(Number(letter))
      if (letterCount[sentence[letter]]) {

        letterCount[sentence[letter]].push(Number(letter));

      }
      else letterCount[sentence[letter]] = [Number(letter)];

    }

  } return letterCount;
};

module.exports = letterPositions;
