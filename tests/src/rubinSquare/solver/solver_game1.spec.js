const assert = require('assert');
const Game = require('../../../../src/rubinSquare/game');
const colors = Game.colors;
const gameUtils = require('../../../../src/utils/game');

const solver = require('../../../../src/rubinSquare/solver');

describe('solver', () => {
  describe('game1', () => {
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
  
    it('should solve game in 2 moves', () => {
      gameUtils.logGameState(game);    
      const moves = solver.solveGameRandomly(game, {maxMoves:2, silent: true});
      
      console.log('final game state:');
      console.log(game.field);
      
      console.log('all moves:');
      console.log(moves);
      
      assert.deepStrictEqual(moves.length, 2);
      assert.deepStrictEqual(game.isCompleted(), true);
    });
  
    it('should solve game with progression algorythm', () => {
      gameUtils.logGameState(game);
      const moves = solver.solveGameRandomlyWithProgression(game, {silent: true});
      
      console.log('final game state:');
      console.log(game.field);
      
      console.log('all moves:');
      console.log(moves);
      
      assert.deepStrictEqual(game.isCompleted(), true);
    });
  });
});
