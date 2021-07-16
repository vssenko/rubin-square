const {Game, solver} = require('../src/rubinSquare');
const gameUtils = require('../src/utils/game');
const jsonfile = require('jsonfile');

const level53 = require('../tests/src/rubinSquare/solver/data/level53');

const game = new Game(level53.array, level53.rules);

gameUtils.logGameState(game);

console.log('start time:', new Date());

const moves = solver.solveGameRandomlyWithProgression(game, {
  maxPossibleMoves: 100,
  maxAttemptsPerSolve: 100000000,
  startingMoves: 20,
  silent: true
});

console.log('finish time:', new Date());

console.log('final game state:');
console.log(game.field);

console.log('all moves:');
console.log(moves);

jsonfile.writeFileSync('./rubin-level53.result.json', moves);