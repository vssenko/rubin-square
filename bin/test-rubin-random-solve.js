const {Game, solver} = require('../src/rubinSquare');

const colors = Game.colors;

const array = [
  colors.purple, colors.purple, colors.orange, colors.orange,
  colors.green, colors.orange, colors.yellow, colors.orange,
  colors.green, colors.purple, colors.purple, colors.yellow,
  colors.green, colors.green, colors.yellow, colors.yellow
];

const game = new Game(array);

console.log('field:');
console.log(game.field);

console.log('game rules:');
console.log(`
leftTop:${game.leftTopCornerColor},
rightTop:${game.rightTopCornerColor},
leftBottom:${game.leftBottomCornerColor},
rightBottom:${game.rightBottomCornerColor}
`);

console.log('isCompleted:');
console.log(game.isCompleted());

const moves = solver.solveGameRandomly(game, 5);

console.log('final game state:');
console.log(game.field);

console.log('all moves:');
console.log(moves);
