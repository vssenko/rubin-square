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

function getRotatedClockWise(array){
  return _.zip.apply(_, array);
}

function getRotatedCounterClockWise(array){
  return getRotatedClockWise(array.map(row => row.reverse()));
}


module.exports = {
  create2DimensionArray,
  getRotatedClockWise,
  getRotatedCounterClockWise
};