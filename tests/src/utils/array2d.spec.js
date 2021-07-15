const assert = require('assert');
const arrayUtils = require('../../../src/utils/array2d');

describe('array2d', () => {
  describe('getRotatedClockWise',() => {
    it('should return rotated 2x array', () => {
      const result = arrayUtils.getRotatedClockWise([
        [1,2],
        [3,4]
      ]);

      const expected = [
        [3,1],
        [4,2],
      ];

      assert.deepStrictEqual(result, expected);
    });
    it('should return rotated 3x array', () => {
      const result = arrayUtils.getRotatedClockWise([
        [1,2,3],
        [1,2,3],
        [1,2,3],
      ]);

      const expected = [
        [1,1,1],
        [2,2,2],
        [3,3,3],
      ];

      assert.deepStrictEqual(result, expected);
    });

    it('should return rotated 4x array', () => {
      const result = arrayUtils.getRotatedClockWise([
        [1,2,3,4],
        [1,2,3,4],
        [1,2,3,4],
        [1,2,3,4]
      ]);

      const expected = [
        [1,1,1,1],
        [2,2,2,2],
        [3,3,3,3],
        [4,4,4,4]
      ];

      assert.deepStrictEqual(result, expected);
    });
  });

  describe('getRotatedCounterClockWise',() => {
    it('should return rotated 2x array', () => {
      const result = arrayUtils.getRotatedCounterClockWise([
        [1,2],
        [3,4]
      ]);

      const expected = [
        [2,4],
        [1,3],
      ];

      assert.deepStrictEqual(result, expected);
    });
    it('should return rotated 3x array', () => {
      const result = arrayUtils.getRotatedCounterClockWise([
        [1,2,3],
        [1,2,3],
        [1,2,3],
      ]);

      const expected = [
        [3,3,3],
        [2,2,2],
        [1,1,1],
      ];

      assert.deepStrictEqual(result, expected);
    });

    it('should return rotated 4x array', () => {
      const result = arrayUtils.getRotatedCounterClockWise([
        [1,2,3,4],
        [1,2,3,4],
        [1,2,3,4],
        [1,2,3,4]
      ]);

      const expected = [
        [4,4,4,4],
        [3,3,3,3],
        [2,2,2,2],
        [1,1,1,1]
      ];

      assert.deepStrictEqual(result, expected);
    });
  });

  describe('mergeSubArray', () => {
    it('should merge sub array into array', ()=> {
      const array = [
        [1,2,3,4],
        [1,2,3,4],
        [1,2,3,4],
        [1,2,3,4],
      ];

      const subArray = [
        [5,6],
        [7,8]
      ];

      arrayUtils.mergeSubArray(array, subArray,{x:1,y:1});

      const expected = [
        [1,2,3,4],
        [1,5,6,4],
        [1,7,8,4],
        [1,2,3,4],
      ];
      assert.deepStrictEqual(array,expected );
    });
  });

  describe('getSquare', () => {
    it('should return part of array', () => {
      const array = [
        [1,2,3,4],
        [5,6,7,8],
        [9,10,11,12],
        [13,14,15,16]
      ];
      const result = arrayUtils.getSquare(array, {y:1, x:2, size: 2});

      assert.deepStrictEqual(result, [
        [7,8],
        [11,12]
      ]);
    });
  });
});