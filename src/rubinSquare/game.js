const _ = require('lodash');
const arrayUtils = require('../utils/array2d');

const colors = {
  white: 'white',
  black: 'black',
  green: 'green',
  yellow: 'yellow',
  purple: 'purple',
  orange: 'orange',
  blue: 'blue',
  red: 'red'
};

const directions = {
  clockwise: 'clockwise',
  counterclockwise: 'counterclockwise'
};

function checkAllColors(field, color){
  let result = true;
  field.forEach(row => {
    row.forEach(item => {
      if (item !== color){
        result = false;
      }
    });
  });

  return result;
}

class Game {
  constructor(array, rules) {
    this._setUpField(array);
    this._setUpRules(rules);
  }

  _setUpField(array){
    const size = Math.sqrt(array.length);
    if (size.toString().includes('.')){
      throw new Error('Only square fields are supported');
    }
    this.size = size;
    this.rowLastIndex = size - 1;
    this.field = arrayUtils.create2DimensionArray(array, size);  
  }

  _setUpRules(rules = {}){
    this.leftTopCornerColor = rules.leftTopCornerColor || this.field[0][0];
    this.rightTopCornerColor = rules.rightTopCornerColor || this.field[0][this.rowLastIndex];
    this.leftBottomCornerColor = rules.leftBottomCornerColor || this.field[this.rowLastIndex][0];
    this.rightBottomCornerColor = rules.rightBottomCornerColor|| this.field[this.rowLastIndex][this.rowLastIndex];
    this.rotateSize = rules.rotateSize || 2;
  }

  isCompleted(){
    const halfSize = this.size / 2;
    const leftTopBlock = arrayUtils.getSquare(this.field, {y: 0, x: 0, size: halfSize});
    const rightTopBlock = arrayUtils.getSquare(this.field, {y: 0, x: halfSize, size: halfSize});
    const leftBottomBlock = arrayUtils.getSquare(this.field, {y: halfSize, x: 0, size: halfSize});
    const rightBottomBlock = arrayUtils.getSquare(this.field, {y: halfSize, x: halfSize, size: halfSize});

    const results = [
      checkAllColors(leftTopBlock, this.leftTopCornerColor),
      checkAllColors(rightTopBlock, this.rightTopCornerColor),
      checkAllColors(leftBottomBlock,this.leftBottomCornerColor),
      checkAllColors(rightBottomBlock, this.rightBottomCornerColor)
    ];

    return results.every(result => result === true);
  }

  setGameState(field){
    this.field = _.cloneDeep(field);
  }

  rotate({x, y, direction}){
    const rotate = direction === directions.clockwise
      ? arrayUtils.getRotatedClockWise
      : arrayUtils.getRotatedCounterClockWise;

    const square = arrayUtils.getSquare(this.field, {x, y, size: this.rotateSize });


    const rotated = rotate(square);

    arrayUtils.mergeSubArray(this.field, rotated, {x,y});
  }
}

Game.colors = colors;
Game.directions = directions;

module.exports = Game;