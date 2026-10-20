class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function buildList(arr) {
  let head = new Node(arr[0]);
  let tail = head;
  for (let i = 1; i < arr.length; i++) {
    tail.next = new Node(arr[i]);
    tail = tail.next;
  }
  return head;
}

function findCycle(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true;
    }
  }

  return false;
}

const list = buildList([1, 2, 3, 4, 5]);
// list.next.next.next = list.next;
console.log(findCycle(list));
