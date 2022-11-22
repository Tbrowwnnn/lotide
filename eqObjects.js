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
