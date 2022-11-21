const assertEqual = require('./assertEqual');
const countLetters = function(sentence) {//create a function that will count letters
  let letterCount = {};

  for (let letter in sentence) {//build a for loop to cycle through the string

    if (sentence[letter] !== " ") { //for each letter in the string skip spaces

      //push each letter to an object and increase the value using square bracket notation.
      if (letterCount[sentence[letter]]) {
        letterCount[sentence[letter]] += 1;//increase value if key already exists
      } else letterCount[sentence[letter]] = 1;

    }
  } return letterCount;


};

module.exports = countLetters;


 assertEqual("Lighthouse Labs", "Bootcamp");
 assertEqual(1, 1);