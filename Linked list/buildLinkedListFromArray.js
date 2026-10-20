class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function buildList(arr) {
  let n = arr.length;

  if (n === 0) return;

  let head = new Node(arr[0]);
  let tail = head;

  for (let i = 1; i < n; i++) {
    tail.next = new Node(arr[i]);
    tail = tail.next;
  }

  return head;
}

console.log(buildList([1, 2, 3]));
