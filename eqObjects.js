const assertEqual = require('./assertEqual'); 
let eqArrays = require('./eqArrays');
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };

const eqObjects = function(object1, object2) {

  if(Object.keys(object1).length !== Object.keys(object2).length){
    return false;

  }for(var num of Object.keys(object1)){

    if(Array.isArray(object1[num]) || Array.isArray(object2[num])){
      return eqArrays(object1[num], object2[num]);
      

    }else if(object1[num] !== object2[num]){
      
      return false
      
    }   
  }return true;
}

module.exports = eqObjects;

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false

// assertEqual(eqObjects(ab, ba), true);
// assertEqual(eqObjects(ab, ba), true);  
// assertEqual(eqObjects(ab, abc),false) 

// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);