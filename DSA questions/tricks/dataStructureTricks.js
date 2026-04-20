// ============================================================
// DATA STRUCTURE TRICKS (Stack, Queue, Trie, Fenwick Tree)
// ============================================================

// ================================
// 1. STACK USING ARRAY
// ================================
// push → push, pop → pop, peek → arr[arr.length-1]
const stack = [];
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack[stack.length - 1]); // peek: 3
stack.pop(); // removes 3

// ================================
// 2. QUEUE USING ARRAY (SIMPLE)
// ================================
// push → push, dequeue → shift (O(n) but fine for small inputs)
// For O(1) dequeue, use a linked list or map-based queue
const queue = [];
queue.push(1);
queue.push(2);
console.log(queue.shift()); // 1 (dequeue)

// ================================
// 3. MAP-BASED O(1) QUEUE
// ================================
// Avoids O(n) shift by using index pointers
class Queue {
  constructor() {
    this.items = {};
    this.head = 0;
    this.tail = 0;
  }
  enqueue(val) {
    this.items[this.tail++] = val;
  }
  dequeue() {
    if (this.isEmpty()) return undefined;
    const val = this.items[this.head];
    delete this.items[this.head++];
    return val;
  }
  peek() {
    return this.items[this.head];
  }
  isEmpty() {
    return this.head === this.tail;
  }
  get size() {
    return this.tail - this.head;
  }
}

// ================================
// 4. TRIE — QUICK PREFIX LOOKUP
// ================================
class TrieNode {
  constructor() {
    this.children = {};
    this.isEnd = false;
  }
}
class Trie {
  constructor() {
    this.root = new TrieNode();
  }
  insert(word) {
    let node = this.root;
    for (const ch of word) {
      if (!node.children[ch]) node.children[ch] = new TrieNode();
      node = node.children[ch];
    }
    node.isEnd = true;
  }
  search(word) {
    let node = this.root;
    for (const ch of word) {
      if (!node.children[ch]) return false;
      node = node.children[ch];
    }
    return node.isEnd;
  }
  startsWith(prefix) {
    let node = this.root;
    for (const ch of prefix) {
      if (!node.children[ch]) return false;
      node = node.children[ch];
    }
    return true;
  }
}

// ================================
// 5. BINARY INDEXED TREE (FENWICK TREE) — POINT UPDATE, RANGE QUERY
// ================================
class FenwickTree {
  constructor(n) {
    this.n = n;
    this.tree = new Array(n + 1).fill(0);
  }
  update(i, delta) {
    for (i++; i <= this.n; i += i & -i) this.tree[i] += delta;
  }
  query(i) {
    let sum = 0;
    for (i++; i > 0; i -= i & -i) sum += this.tree[i];
    return sum;
  }
  rangeQuery(l, r) {
    return this.query(r) - (l > 0 ? this.query(l - 1) : 0);
  }
}

// ================================
// 6. SET — USEFUL PATTERNS
// ================================
const set = new Set([1, 2, 3]);
const arrFromSet = [...set]; // [1,2,3]
const setFromArr = new Set([1, 2, 2]); // Set {1, 2}

// ================================
// 7. MAP — USEFUL PATTERNS
// ================================
const mp = new Map();
mp.set("key", "value");
mp.has("key"); // true
mp.get("key"); // "value"
mp.delete("key");
mp.size; // 0

// Iterate map
// for (const [key, val] of mp) { ... }
