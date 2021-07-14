const stopIterate = 'stopIterate';

class LinkedListItem {
  constructor(item){
    this.item = item;
    this.prev = null;
    this.next = null;
  }
}

class LinkedList {
  constructor(){
    this.first = null;
  }

  push(item){
    const newItem = new LinkedListItem(item);
  
    if (!this.first){
      this.first = new LinkedListItem(item);
      return this.first;
    }

    const lastItem = this.last();

    lastItem.next = newItem;
    newItem.prev = lastItem;
    return newItem;
  }

  last() {
    if (!this.first){
      return null;
    }

    let last;
    this.iterate((i) => {
      if (!i.next){
        last = i;
        return stopIterate;
      }
    });

    return last;
  }

  remove(item){
    if (!this.first){
      return null;
    }

    const foundItem = this.find(item);
    if (!foundItem){
      return null;
    }

    const {prev: prevToFound, next: nextToFound} = foundItem;
    if (prevToFound){
      prevToFound.next = nextToFound;
    }
    if (nextToFound){
      nextToFound.prev = prevToFound;
    }
    if (this.first === foundItem){
      this.first = nextToFound;
    }

    return foundItem;
  }

  find(item){
    if (!this.first){
      return null;
    }

    let foundItem = null;
    this.iterate((i) => {
      if (i.item === item){
        foundItem = i;
        return stopIterate;
      }
    });

    return foundItem;
  }

  toArray(){
    const result = [];

    this.iterate((i) => result.push(i.item));
  
    return result;
  }

  iterate(func){
    if (!this.first){
      return;
    }

    let current = this.first;
    while (current){
      const result = func(current);
      if (result === stopIterate){
        break;
      }
      current = current.next;
    }
  }
}

LinkedList.operations = {
  stopIterate
};

module.exports = LinkedList;