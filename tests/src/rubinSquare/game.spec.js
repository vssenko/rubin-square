const assert = require('assert');
const { hasUncaughtExceptionCaptureCallback } = require('process');
const Game = require('../../../src/rubinSquare/game');
const directions = Game.directions;
const colors = Game.colors;

describe('Game', () => {
  let game;
  beforeEach(() => {
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

  it('should determine completed state correctly', () => {
    assert.deepStrictEqual(game.isCompleted(), false);
    game.setGameState([
      [ colors.purple, colors.purple, colors.orange, colors.orange ],
      [ colors.purple, colors.purple, colors.orange, colors.orange ],
      [ colors.green, colors.green, colors.yellow, colors.yellow ],
      [ colors.green, colors.green, colors.yellow, colors.yellow ]
    ]);
    assert.deepStrictEqual(game.isCompleted(), true);
  });

  it('should rotate clockwise properly', () => {
    game.rotate({
      x: 2,
      y: 1,
      direction: directions.clockwise
    });

    console.log(game.field);

    assert.deepStrictEqual(game.field, [
      [colors.purple, colors.purple, colors.orange, colors.orange],
      [colors.green, colors.orange, colors.purple, colors.yellow],
      [colors.green, colors.purple, colors.yellow, colors.orange],
      [colors.green, colors.green, colors.yellow, colors.yellow]
    ]);
  });

  it('should rotate counter clockwise properly', () => {
    game.rotate({
      x: 0,
      y: 0,
      direction: directions.counterclockwise
    });

    assert.deepStrictEqual(game.field, [
      [colors.purple, colors.orange, colors.orange, colors.orange],
      [colors.purple, colors.green, colors.yellow, colors.orange],
      [colors.green, colors.purple, colors.purple, colors.yellow],
      [colors.green, colors.green, colors.yellow, colors.yellow]
    ]);
  });
});