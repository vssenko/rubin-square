const {Game, solver} = require('../src/rubinSquare');

const colors = Game.colors;

const array = [
  colors.purple, colors.purple, colors.orange, colors.orange,
  colors.green, colors.orange, colors.yellow, colors.orange,
  colors.green, colors.purple, colors.purple, colors.yellow,
  colors.green, colors.green, colors.yellow, colors.yellow
];

console.log(array);

const game = new Game(array);

console.log('here');

console.log(game.field);

console.log(Game.getSquare(game.field, {x:0, y:0, size: 2}));