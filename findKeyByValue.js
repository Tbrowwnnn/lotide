const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed:  ${actual}  ===   ${expected}`);
  } else (console.log(`❌❌❌ Assertion Failed: ${actual}  !==   ${expected}`));
};

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const favouriteVideoGamesByGenre = {
  storyRPG: "The Witcher 3",
  western: "Red Dead Redemption 2",
  sandBox_RPG: "Breath of the Wild",
  Life_Sim: "Persona 5",
  JRPG: "Final Fantasy X"
}
const findKeyByValue = function(list, keyToFind){
  

  for(const show in list){
    // console.log("inside list", list[show])

    if(list[show] === keyToFind){
      return show;
    }
  }
}

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
assertEqual(findKeyByValue(favouriteVideoGamesByGenre, "Persona 5"), "Life_Sim");

