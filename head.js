const assertEqual = require('./assertEqual');

const head = function(array) {
  for (let i = 0; i < 1; i++) {
    return array[i];
  }
};

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), undefined);