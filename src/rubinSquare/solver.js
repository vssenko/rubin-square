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
function solveGameRandomly(game, maxMoves, maxAttempts = Number.MAX_VALUE){
  console.log('solver: start solving game');

  let attempt = 0;

  const initialField = _.cloneDeep(game.field);

  let moves;
  let isSolved = false;
  while(!isSolved && attempt < maxAttempts){
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

function solveGameRandomlyWithProgression(game){
  console.log('solver: start solving game with max moves progression:');
  const maxPossibleMoves = 1000;

  let maxMoves = 0;

  let result;
  while(maxMoves <= maxPossibleMoves){
    result = solveGameRandomly(game, maxMoves, 1000);
    if (game.isCompleted()){
      break;
    }
    maxMoves++;
  }

  if (game.isCompleted()){
    console.log(`solver: game is solved with progression on ${maxMoves}`);
    return result; 
  } else {
    console.log('solver: game is not solvedwith progression');
    return null;
  }

}

module.exports = {
  solveGameRandomly,
  solveGameRandomlyWithProgression
};