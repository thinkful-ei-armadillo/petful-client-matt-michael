'use strict';

class _Node {
  constructor(data, next, prev) {
    this.data = data;
    this.next = next;

  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    const node = new _Node(data);

    if (this.first === null) {
      this.first = node;
    }

    if (this.last) {
      this.last.next = node;
    }
    //make the new node the last item on the queue
    this.last = node;
  }

  dequeue() {
    //if the queue is empty, there is nothing to return
    if (this.first === null) {
      return;
    }
    const node = this.first;
    this.first = this.first.next;
    //if this is the last item in the queue
    if (node === this.last) {
      this.last = null;
    }
    return node.value;
  }
}


function peek(queue) {
  return queue.first;
}

function isEmpty(queue) {
  return queue.first && queue.last ? true : false;
}

function display(queue) {
  let temp = [];
  while (queue.first !== null) {
    temp.push(queue.dequeue());
  }
  for (let i = 0; i < temp.length; i++) {
    queue.enqueue(temp[i]);
  }
  return temp;
}



export default Queue, {peek, isEmpty, display};

