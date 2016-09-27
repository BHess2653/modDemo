// function hi(name){
//   console.log(name);
// }
//
// hi('Hello World');

/*
  Captain
  First Mate
  Deck Swab
*/

const pirates = require('./pirates.js');

const startingPoint = {
  x: process.env.STARTING_X,
  y: process.env.STARTING_Y,
};

const finalLocation = pirates.deckswab({startingPoint});
console.log(finalLocation);
