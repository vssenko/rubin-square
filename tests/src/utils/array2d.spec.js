const assert = require('assert');
const arrayUtils = require('../../../src/utils/array2d');

describe('array2d', () => {
  describe('getRotatedClockWise',() => {
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
});