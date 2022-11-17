const words = ["ground", "control", "to", "major", "tom"];


const map = function(array, callback){

  const results = [];

  for(let item of array){


  results.push(callback(item));

  }
  
  return results;
 } 

const results1 = map(words, word => word[0]);
console.log(results1);


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

 const assertArraysEqual = function(response){
   if(response === true){
     console.log(`✅✅✅ both of these Arrays match`);
   }
     else console.log(`❌❌❌ These Arrays don't match`);
 }



assertArraysEqual(eqArrays(results1, ['g','c','t','m','t'])) // => true
// assertArraysEqual(eqArrays([1, 2, 3], [3, 2, 1])) // => false

// assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
// assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", 3])) // => false
// assertArraysEqual(eqArrays(["1", "2", "3", "4"], ["1", "2", 3])) // => false