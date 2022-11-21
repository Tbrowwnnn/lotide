const assertEqual = require('./assertEqual');

const tail = function(words) {
  let finalArray = [];

  for (let i = 0; i < words.length; i++) {
    finalArray.push(words[i]);
  }
  return finalArray.slice(1);
};

module.exports = tail; 

