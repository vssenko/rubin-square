const assert = require('assert');
const Game = require('../../../src/rubinSquare/game');
const colors = Game.colors;
const gameUtils = require('../../../src/utils/game');

const solver = require('../../../src/rubinSquare/solver');

describe('solver', () => {
  describe.only('game2', () => {
    let game;
  
    beforeEach(() => {
      const array = [
        colors.purple, colors.red, colors.yellow, colors.red,
        colors.purple, colors.purple, colors.green, colors.red,
        colors.green, colors.green, colors.yellow, colors.yellow,
        colors.purple, colors.green, colors.red, colors.yellow
      ];
      
      game = new Game(array, {
        leftTopCornerColor: colors.purple,
        rightTopCornerColor: colors.red,
        leftBottomCornerColor: colors.green, 
        rightBottomCornerColor: colors.yellow
      });
    });
  
    it('should solve game2 in 6 moves', () => {
      gameUtils.logGameState(game);    
      const moves = solver.solveGameRandomly(game, {maxMoves:6, maxAttempts: 100000, silent: true});
      
      console.log('final game state:');
      console.log(game.field);
      
      console.log('all moves:');
      console.log(moves);
      
      assert.deepStrictEqual(game.isCompleted(), true);
      assert.deepStrictEqual(moves.length, 6);
    });
  
    it.only('should solve game2 with progression algorythm', () => {
      gameUtils.logGameState(game);
      const moves = solver.solveGameRandomlyWithProgression(game, {silent: true, maxAttemptsPerSolve: 100000, maxPossibleMoves: 10});
      
      console.log('final game state:');
      console.log(game.field);
      
      console.log('all moves:');
      console.log(moves);
      
      assert.deepStrictEqual(game.isCompleted(), true);
    });
  });
});
