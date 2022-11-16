const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed:  ${actual}  ===   ${expected}`);
  } else (console.log(`❌❌❌ Assertion Failed: ${actual}  !==   ${expected}`));
};

const countLetters = function(sentence) {//create a function that will count letters
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



console.log(countLetters("My name is Tyler Brown."));
console.log(countLetters("Lighthouse Labs."));
console.log(countLetters("eeeeeeeeeeeeeeeeeee"),);