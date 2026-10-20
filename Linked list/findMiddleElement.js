// Find middle element using slow fast pointer

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function buildList(arr) {
  let head = new Node(arr[0]);
  let tail = head;
  let n = arr.length;

  for (let i = 1; i < n; i++) {
    tail.next = new Node(arr[i]);
    tail = tail.next;
  }
  return head;
}

function findMiddle(head) {
  let slow = head;
  let fast = head;

  while (fast.next !== null && fast.next.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}

const constructLinkedList = buildList([1, 2, 3, 4, 5]);

console.log(findMiddle(constructLinkedList).value);
