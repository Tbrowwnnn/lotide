const { processArgv } = require("yargs/build/index.cjs");

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed:  ${actual}  ===   ${expected}`);
  } else (console.log(`❌❌❌ Assertion Failed: ${actual}  !==   ${expected}`));
};

var eqArrays = function(array1, array2){
  arrayLength = array1.length - 1;

  mixedArray = [...array1, ...array2]

 // console.log("mixedArray looks like this: ", mixedArray)

  for(let i = 0; i < mixedArray.length; i++){
    
    if(mixedArray[i] === mixedArray[arrayLength])
      arrayLength++;
       console.log("Its looping");

    }false;
    
  } 
  // let finalBool = false;
  // let matchingArrays = [];

  // for(let index = 0; index < array1.length; index++){
  //   for(let j = 0; j < array1[index].length; j++){

  //     matchingArrays.push(array1[index][j]);
  //   }
  // for(let x = 0; x < array2.length; x++){
  //   for(let y = 0; y < array2[x].length; y++){
  //     matchingArrays.push(array2[x][y]);
  //   }
  // }  console.log(matchingArrays);



    // if(array1[index][j] === array2[x][y]){

    //   return true;
    // }return false;
  



