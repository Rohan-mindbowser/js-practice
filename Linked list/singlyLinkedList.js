class Node {
  constructor(value) {
    (this.value = value), (this.next = null);
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
  }

  push(value) {
    let newNode = new Node(value);
    //If no node is present
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
      return;
    }
    this.tail.next = newNode;
    this.tail = newNode;
  }

  pop() {
    //If list have only one node
    if (!this.head?.next) {
      this.head = null;
      this.tail = null;
      return;
    }
    let prev = this.head;
    let next = this.head;

    while (next.next) {
      prev = next;
      next = next.next;
    }

    this.tail = prev;
    this.tail.next = null;
  }

  //Adding node in the beginning
  unShift(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
      return;
    }
    newNode.next = this.head;
    this.head = newNode;
  }

  removeByValue(value) {
    let current = this.head;
    let prev = this.head;

    while (current.next && current.value !== value) {
      prev = current;
      current = prev.next;
    }
    prev.next = current.next;
  }

  insert(value, index) {
    if (index == 0) {
      this.unShift(value);
      return;
    }
    let newNode = new Node(value);
    let prev = this.head;
    let curr = this.head;
    let counter = 0;

    while (counter < index) {
      prev = curr;
      curr = prev.next;
      counter++;
    }

    prev.next = newNode;
    newNode.next = curr;
  }
}

const list = new LinkedList(1);
list.push(2);
list.insert(33, 0);
console.table(list);
