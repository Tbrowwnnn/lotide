const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed:  ${actual}  ===   ${expected}`);
  } else (console.log(`❌❌❌ Assertion Failed: ${actual}  !==   ${expected}`));
};



const tail = function(words) {
  let finalArray = [];

  for (let i = 0; i < words.length; i++) {
    finalArray.push(words[i]);
  }
  return finalArray.slice(1);
};

assertEqual(tail(["hello"]).length, 2);
assertEqual(tail(["hello", "My name is", "Slim Shady"]).length, 2);