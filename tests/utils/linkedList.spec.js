const assert = require('assert');

const LinkedList = require('../../src/utils/linkedList');

describe('Linked list', () => {
  it('should work', () => {
    const linkedList = new LinkedList();
    linkedList.push(2);
    linkedList.push(5);
    linkedList.push(10);
    linkedList.remove(7);
    linkedList.remove(5);

    assert.deepStrictEqual(linkedList.toArray(), [2,10]);
  });
});

