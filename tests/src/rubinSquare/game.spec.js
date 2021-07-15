const assert = require('assert');
const Game = require('../../../src/rubinSquare/game');
const directions = Game.directions;
const colors = Game.colors;

describe('Game', () => {
  let array; 
  let game;
  beforeEach(() => {
    array = [
      colors.purple, colors.purple, colors.orange, colors.orange,
      colors.green, colors.orange, colors.yellow, colors.orange,
      colors.green, colors.purple, colors.purple, colors.yellow,
      colors.green, colors.green, colors.yellow, colors.yellow
    ];

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

  it('should determine completed state on 8x8 size', () => {
    const level53 = require('./solver/data/level53');
    const game = new Game(level53.array, level53.rules);
    assert.strictEqual(game.isCompleted(), false);

    const c = colors;
    game.setGameState([
      [c.purple, c.purple, c.purple, c.purple, c.red, c.red, c.red, c.red],
      [c.purple, c.purple, c.purple, c.purple, c.red, c.red, c.red, c.red],
      [c.purple, c.purple, c.purple, c.purple, c.red, c.red, c.red, c.red],
      [c.purple, c.purple, c.purple, c.purple, c.red, c.red, c.red, c.red],
      [c.blue, c.blue, c.blue, c.blue, c.yellow, c.yellow, c.yellow, c.yellow],
      [c.blue, c.blue, c.blue, c.blue, c.yellow, c.yellow, c.yellow, c.yellow],
      [c.blue, c.blue, c.blue, c.blue, c.yellow, c.yellow, c.yellow, c.yellow],
      [c.blue, c.blue, c.blue, c.blue, c.yellow, c.yellow, c.yellow, c.yellow]
    ]);
    assert.strictEqual(game.isCompleted(), true);
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

  it('should properly rotate clockWise with custom rotate size', () => {
    const game = new Game(array, {rotateSize: 3});

    game.rotate({x: 1, y: 1, direction: directions.clockwise}); 

    assert.deepStrictEqual(game.field, [
      [ colors.purple, colors.purple, colors.orange, colors.orange ],
      [ colors.green, colors.green, colors.purple, colors.orange ],
      [ colors.green, colors.yellow, colors.purple, colors.yellow ],
      [ colors.green, colors.yellow, colors.yellow, colors.orange ]
    ]);
  });

  it('should properly rotate counter clockWise with custom rotate size', () => {
    const game = new Game(array, {rotateSize: 3});

    game.rotate({x: 0, y: 0, direction: directions.counterclockwise}); 

    assert.deepStrictEqual(game.field, [
      [ colors.orange, colors.yellow, colors.purple, colors.orange ],
      [ colors.purple, colors.orange, colors.purple, colors.orange ],
      [ colors.purple, colors.green, colors.green, colors.yellow ],
      [ colors.green, colors.green, colors.yellow, colors.yellow ]
    ]);
  });
});