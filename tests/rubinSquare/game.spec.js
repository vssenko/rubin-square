const assert = require('assert');
const Game = require('../../src/rubinSquare/game');
const colors = Game.colors;

describe('Game', () => {
  describe('initial state', () => {
    let game;
    before(() => {
      game = new Game([
        colors.purple, colors.purple, colors.orange, colors.orange,
        colors.green, colors.orange, colors.yellow, colors.orange,
        colors.green, colors.purple, colors.purple, colors.yellow,
        colors.green, colors.green, colors.yellow, colors.yellow
      ]);
    });

    it('should parse arrey correctly', () => {
      assert.deepStrictEqual(game.field, [
        [colors.purple, colors.purple, colors.orange, colors.orange],
        [colors.green, colors.orange, colors.yellow, colors.orange],
        [colors.green, colors.purple, colors.purple, colors.yellow],
        [colors.green, colors.green, colors.yellow, colors.yellow]
      ]);
    });

    it('should determine rules correctly', () => {
      assert.deepStrictEqual(game.leftTopCornerColor, colors.purple);
      assert.deepStrictEqual(game.rightTopCornerColor, colors.orange);
      assert.deepStrictEqual(game.leftBottomCornerColor, colors.green);
      assert.deepStrictEqual(game.rightBottomCornerColor, colors.yellow);
    });
  });
});