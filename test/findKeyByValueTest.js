const findKeyByValue = require('../findKeyByValue');
const assert = require('chai').assert;

describe("#findKeyByValue", () => {

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

  it("returns drama for The Wire", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });

  it("return undefined for That 70s Show", () => { assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined); 
});

  it("return sci_fi for The Expanse", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
  });

  it("return Life_Sim for Persona 5", () => {
    assert.strictEqual(findKeyByValue(favouriteVideoGamesByGenre, "Persona 5"), "Life_Sim");
  });
});
