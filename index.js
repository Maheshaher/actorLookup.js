const Actors = {
  "Shah Rukh Khan": [
    "Dilwale Dulhania Le Jayenge",
    "My Name Is Khan",
    "Chennai Express",
  ],
  "Amitabh Bachchan": ["Sholay", "Deewaar", "Piku"],
  "Aamir Khan": ["Lagaan", "Dangal", "3 Idiots"],
  "Salman Khan": ["Bajrangi Bhaijaan", "Sultan", "Dabangg"],
  "Deepika Padukone": [
    "Padmaavat",
    "Chennai Express",
    "Yeh Jawaani Hai Deewani",
  ],
};

//Finding actors by movie name
function findActorByMoviesName(movieName) {
  const actors = [];
  for (let actor in Actors) {
    if (Actors[actor].includes(movieName)) {
      actors.push(actor);
    }
  }

  //using ternary operator to manage scenarios
  return actors.length > 0 ? actors : "No actors found for this movie.";
}

//Finding  movie name by actors/actress name

function findMoviesByActorName(actorName) {
  return Actors[actorName]
    ? Actors[actorName]
    : "No movies found for this actor.";
}

console.log(findMoviesByActorName("Aamir Khan"));
console.log(findActorByMoviesName("Chennai Express"));
