const videoGames = ["Persona 5", "The Witcher 3", "Ghost of Tsushima", "Final Fantasy X", "RPG Burnout", "Assassins Creed: Odyssey", "Yakuza 7: Like a Dragon"];

const keepPlaying = function(array, condition) {
  const finalList = [];

  for (let games of array) {
    
    if (condition(games)) {
      break;
    }finalList.push(games);

    
  } return finalList;
};

const gamesToPlay = keepPlaying(videoGames, game => game === "RPG Burnout");

console.log(gamesToPlay);

 