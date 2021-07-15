const Game = require('../../../../../src/rubinSquare/game');
const c = Game.colors;


const array = [
  c.purple, c.purple, c.purple, c.yellow, c.yellow, c.red, c.purple, c.red,
  c.purple, c.blue, c.red, c.blue, c.red, c.yellow, c.purple, c.red,
  c.purple, c.blue, c.red, c.yellow, c.red, c.blue, c.red, c.red,
  c.red, c.red, c.purple, c.blue, c.red, c.purple, c.blue, c.red,
  c.purple, c.blue, c.red, c.purple, c.blue, c.blue, c.blue, c.red,
  c.purple, c.blue, c.yellow, c.red, c.purple, c.yellow, c.yellow, c.yellow,
  c.yellow, c.blue, c.purple, c.yellow, c.yellow, c.yellow, c.blue, c.yellow,
  c.blue, c.purple, c.purple, c.blue, c.yellow, c.yellow, c.blue, c.yellow
];

const rules = {
  leftTopCornerColor: c.purple,
  rightTopCornerColor: c.red,
  leftBottomCornerColor: c.blue, 
  rightBottomCornerColor: c.yellow,
  rotateSize: 3
};

module.exports = {
  array,
  rules
};