const assert = require('assert');
const Game = require('../../../src/rubinSquare/game');
const colors = Game.colors;

const solver = require('../../../src/rubinSquare/solver');

function logGameState(game){
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
}

describe('solver', () => {
  let game;

  beforeEach(() => {
    const array = [
      colors.purple, colors.purple, colors.orange, colors.orange,
      colors.green, colors.orange, colors.yellow, colors.orange,
      colors.green, colors.purple, colors.purple, colors.yellow,
      colors.green, colors.green, colors.yellow, colors.yellow
    ];
    
    game = new Game(array);
  });

  it('should solve simple game in 2 moves', () => {
    logGameState(game);    
    const moves = solver.solveGameRandomly(game, {maxMoves:2});
    
    console.log('final game state:');
    console.log(game.field);
    
    console.log('all moves:');
    console.log(moves);
    
    assert.deepStrictEqual(game.isCompleted(), true);
  });

  it('should solve simple game with progression algorythm', () => {
    logGameState(game);
    const moves = solver.solveGameRandomlyWithProgression(game);
    
    console.log('final game state:');
    console.log(game.field);
    
    console.log('all moves:');
    console.log(moves);
    
    assert.deepStrictEqual(game.isCompleted(), true);
  });
});