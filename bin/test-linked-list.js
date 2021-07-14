const LinkedList = require('../src/utils/linkedList')
const linkedList = new LinkedList();

linkedList.push(2);
linkedList.push(5);
linkedList.push(10);
linkedList.remove(7);
linkedList.remove(5);

console.log(linkedList.toArray())