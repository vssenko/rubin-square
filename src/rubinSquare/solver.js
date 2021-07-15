const _ = require('lodash');
const Game = require('./game');

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomDirection(){
  return Math.random() > 0.5 ? Game.directions.clockwise: Game.directions.counterclockwise;
}

function trySolveRandomly(game, maxMoves){
  const maxFieldIndex = game.size - 2;

  const moves = [];

  const makeRandomMove = () => {
    const move = {
      x: getRandomInt(0, maxFieldIndex),
      y: getRandomInt(0, maxFieldIndex),
      direction: getRandomDirection()
    };
    game.rotate(move);
    return move;
  };

  while(!game.isCompleted() && moves.length <= maxMoves){
    moves.push(makeRandomMove());
  }

  return moves;
}


/**
 * 
 * @param {Game} game 
 */
function solveGameRandomly(game, maxMoves){
  console.log('solver: start solving game');

  let attempt = 0;

  const initialField = _.cloneDeep(game.field);

  let moves;
  let isSolved = false;
  while(!isSolved){
    if (attempt % 100 === 0){
      console.log(`solver: solving game, attempt ${attempt}`);
    }
    game.setGameState(initialField);
    moves = trySolveRandomly(game, maxMoves);
    if (game.isCompleted()){
      isSolved = true;
    }
    attempt++;
  }

  console.log(`solver: game is solved randomly on attempt ${attempt} in ${moves.length} moves`);
  return moves;
}

module.exports = {
  solveGameRandomly
};