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
  let row = 0;
  while (row < array.length / size) {
    result[row] = array.slice(0, size);
  }

  return result;
}

class Game {
  constructor(array) {
    if (array[0][0]){
      const field = array;
      this.size = field[0].length;
      this.field = field;
      return;
    }

    const size = Math.sqrt(array.length);
    if (size.toString().includes('.')){
      throw new Error('Only square fields are supported');
    }
    this.size = size;
    this.field = create2DimensionField(array, size);
  }

  rotate({x, y}, direction){
    if (direction === directions.clockwise){
      return this._rotateClockWise({x,y});
    }
    if (direction === directions.counterclockwise){
      return this._rotateCounterClockWise({x,y});
    }
  }

  _rotateClockWise({x,y}){
    const leftTop = this.field[y,x];
    const rightTop = this.field[y, x + 1];
    const leftBottom = this.field[y + 1, x];
    const rightBottom = this.field[y + 1, x + 1];

    this.field[y,x] = leftBottom;
    this.field[y, x + 1] = leftTop;
    this.field[y + 1, x] = rightBottom;
    this.field[y + 1, x + 1] = rightTop;
  }

  _rotateCounterClockWise({x,y}){
    const leftTop = this.field[y,x];
    const rightTop = this.field[y, x + 1];
    const leftBottom = this.field[y + 1, x];
    const rightBottom = this.field[y + 1, x + 1];

    this.field[y,x] = rightTop;
    this.field[y, x + 1] = rightBottom;
    this.field[y + 1, x] = leftTop;
    this.field[y + 1, x + 1] =leftBottom;
  }
}

Game.colors = colors;
Game.directions = directions;

module.exports = Game;