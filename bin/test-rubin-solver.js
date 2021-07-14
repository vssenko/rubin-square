const {Game, solver} = require('../src/rubinSquare');

const colors = Game.colors;

const array = [
  colors.purple, colors.purple, colors.orange, colors.orange,
  colors.green, colors.orange, colors.yellow, colors.orange,
  colors.green, colors.purple, colors.purple, colors.yellow,
  colors.green, colors.green, colors.yellow, colors.yellow
];

const game = new Game(array);

solver.solveGame(game);