const assert = require('assert');
const Game = require('../../../../src/rubinSquare/game');
const colors = Game.colors;
const gameUtils = require('../../../../src/utils/game');

const level53 = require('./data/level53');

const solver = require('../../../../src/rubinSquare/solver');

describe('solver', () => {
  xdescribe('game53', () => {
    let game;
  
    beforeEach(() => {
      game = new Game(level53.array, level53.rules);
    });
  
    it.only('should solve this crazy shit', () => {
      gameUtils.logGameState(game);    
      const moves = solver.solveGameRandomly(game, {maxMoves:50, maxAttempts: 100000000, silent: true});
      
      console.log('final game state:');
      console.log(game.field);
      
      console.log('moves count:', moves.length);
      
      assert.deepStrictEqual(game.isCompleted(), true);
    });
  });
});
