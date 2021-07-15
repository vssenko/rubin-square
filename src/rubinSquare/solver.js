const _ = require('lodash');
const Game = require('./game');

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomDirection(){
  return Math.random() > 0.5 ? Game.directions.clockwise: Game.directions.counterclockwise;
}

function trySolveRandomly(game, maxMoves){
  const maxFieldIndex = game.size - game.rotateSize;

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

  while(!game.isCompleted() && moves.length < maxMoves){
    moves.push(makeRandomMove());
  }

  return moves;
}


/**
 * 
 * @param {Game} game 
 */
function solveGameRandomly(game, {maxMoves, maxAttempts = 100000, silent = false} = {}){
  !silent && console.log('solver: start solving game randomly');

  let attempt = 0;

  const initialField = _.cloneDeep(game.field);

  let moves;
  let isSolved = false;
  while(!isSolved && attempt < maxAttempts){
    if (attempt % 100 === 0){
      !silent && console.log(`solver: solving game, attempt ${attempt}`);
    }
    game.setGameState(initialField);
    moves = trySolveRandomly(game, maxMoves);
    if (game.isCompleted()){
      isSolved = true;
    }
    attempt++;
  }

  if (game.isCompleted()){
    !silent && console.log(`solver: game is solved randomly on attempt ${attempt} in ${moves.length} moves`);
    return moves;
  }

  return null;
}

function solveGameRandomlyWithProgression(game, { startingMoves = 0, maxPossibleMoves = 1000, maxAttemptsPerSolve = 100000, silent = false } = {}){
  console.log('solver: start solving game with max moves progression:');
  console.log(`solver: startingMoves: ${startingMoves}, maxPossibleMoves: ${maxPossibleMoves}, maxAttemptsPerSolve: ${maxAttemptsPerSolve}, silent: ${silent}`);


  const initialState = _.cloneDeep(game.field);

  let maxMoves = startingMoves;

  let result;
  while(maxMoves <= maxPossibleMoves){
    game.setGameState(initialState);
    result = solveGameRandomly(game, {maxMoves, maxAttempts: maxAttemptsPerSolve, silent});
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