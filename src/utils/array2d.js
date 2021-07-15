const _ = require('lodash');

/**
 * This method create a field (array of arrays) in a representation like:
 *                       [[1,2,3]
 * [1,2,3,4,5,6,7,8,9] => [4.5.6]
 *                        [7,8,9]]
 * @param {string[]} array 
 * @param {number} size 
 * @returns {Array.<string[]>}
 */
function create2DimensionArray(array, size){
  const result = [];
  let offset = 0;
  for(let row = 0; row < size; row++){
    result[row] = _.cloneDeep(array.slice(offset, offset + size));
    offset += size;
  }

  return result;
}

function getSquare(array, {x,y, size}){
  const result = [];

  for(let row = y; row < (y + size); row++){
    result.push(array[row].slice(x, x + size));
  }

  return result;
}

function transpose(array){
  return array[0].map((_, colIndex) => array.map(row => row[colIndex]));
}

function getRotatedClockWise(array){
  return transpose(array).map(row => row.reverse());

}

function getRotatedCounterClockWise(array){
  return transpose(array.map(row => row.reverse()));
}

function mergeSubArray(array, subArray, {x, y}){
  const size = subArray.length;
  let subArrayX = 0;
  let subArrayY = 0;

  for(let arrayY = y; arrayY < (y +size); arrayY++){
    subArrayX = 0;
    for(let arrayX =x; arrayX < (x + size); arrayX++){
      array[arrayY][arrayX] = subArray[subArrayY][subArrayX];
      subArrayX++;
    }
    subArrayY++;
  }
}

module.exports = {
  getSquare,
  create2DimensionArray,
  getRotatedClockWise,
  getRotatedCounterClockWise,
  mergeSubArray
};