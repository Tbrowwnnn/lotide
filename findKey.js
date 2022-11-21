const assertEqual = require('./assertEqual');

const gameList = {
  "Persona 5": { score: 98 },
  "Breath of the Wild": { score: 99 },
  "Red Dead Redemption 2": { score: 95 },
  "The Witcher 3": { score: 100 },
  "Final Fantasy X": { score: 90 },
  "Ghost of Tsushima": { score: 95 },
  "Yakuza Kiwami 2": { score: 86 }
};

const findKey = function(objectList, condition) {

  for (const games in objectList) {
    const gameList = objectList[games];

    for (const scores in gameList) {

      if (condition(gameList)) {
        return games;

      }
    }
  }
};

module.exports = findKey;

const gameScore = findKey(gameList, x => x.score === 95);

assertEqual(gameScore, "Red Dead Redemption 2");

console.log(gameScore);

