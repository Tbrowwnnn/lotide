const findKeyByValue = function(list, keyToFind){
  
  for(const show in list){

    console.log(list[show])
    if(list[show] === keyToFind){
      
      return show;
    }
  }
}
module.exports = findKeyByValue; 



