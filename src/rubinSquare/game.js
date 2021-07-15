const _ = require('lodash');

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

function getSquare(field, {x,y, size}){
  const result = [];

  for(let row = y; row < (y + size); row++){
    result.push(field[row].slice(x, x + size));
  }

  return result;
}

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


/*
/ This method create a field (array of arrays) in a representation like:
/                       [[1,2,3]
/ [1,2,3,4,5,6,7,8,9] => [4.5.6]
/                        [7,8,9]]
/
/
*/
function create2DimensionField(array, size){
  const result = [];
  let offset = 0;
  for(let row = 0; row < size; row++){
    result[row] = _.cloneDeep(array.slice(offset, offset + size));
    offset += size;
  }

  return result;
}

class Game {
  constructor(array) {
    this._setUpField(array);
    this._setUpRules();
  }

  _setUpField(array){
    const size = Math.sqrt(array.length);
    if (size.toString().includes('.')){
      throw new Error('Only square fields are supported');
    }
    this.size = size;
    this.rowLastIndex = size - 1;
    this.field = create2DimensionField(array, size);  
  }

  _setUpRules(){
    this.leftTopCornerColor = this.field[0][0];
    this.rightTopCornerColor = this.field[0][this.rowLastIndex];
    this.leftBottomCornerColor = this.field[this.rowLastIndex][0];
    this.rightBottomCornerColor = this.field[this.rowLastIndex][this.rowLastIndex];
  }

  isCompleted(){
    const halfSize = this.size / 2;
    const leftTopBlock = getSquare(this.field, {y: 0, x: 0, size: halfSize});
    const rightTopBlock = getSquare(this.field, {y: 0, x: halfSize, size: halfSize});
    const leftBottomBlock = getSquare(this.field, {y: halfSize, x: 0, size: halfSize});
    const rightBottomBlock = getSquare(this.field, {y: halfSize, x: halfSize, size: halfSize});

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
    if (direction === directions.clockwise){
      return this._rotateClockWise({x,y});
    }
    if (direction === directions.counterclockwise){
      return this._rotateCounterClockWise({x,y});
    }
  }

  _rotateClockWise({x,y}){
    const leftTop = this.field[y][x];
    const rightTop = this.field[y][x + 1];
    const leftBottom = this.field[y + 1][x];
    const rightBottom = this.field[y + 1][x + 1];

    this.field[y][x] = leftBottom;
    this.field[y][x + 1] = leftTop;
    this.field[y + 1][x] = rightBottom;
    this.field[y + 1][x + 1] = rightTop;
  }

  _rotateCounterClockWise({x,y}){
    const leftTop = this.field[y][x];
    const rightTop = this.field[y][x + 1];
    const leftBottom = this.field[y + 1][x];
    const rightBottom = this.field[y + 1][x + 1];

    this.field[y][x] = rightTop;
    this.field[y][x + 1] = rightBottom;
    this.field[y + 1][x] = leftTop;
    this.field[y + 1][x + 1] =leftBottom;
  }
}

Game.colors = colors;
Game.directions = directions;
Game.getSquare = getSquare;

module.exports = Game;