// ============================================================
// UTILITY TRICKS & CHEAT SHEET
// ============================================================

// ================================
// 1. DEEP CLONE AN OBJECT/ARRAY
// ================================
const original = { a: 1, b: { c: 2 } };
const clone = structuredClone(original); // modern, handles nested
// Fallback: JSON.parse(JSON.stringify(original)) — doesn't handle functions, undefined, etc.

// ================================
// 2. CLAMP A NUMBER BETWEEN MIN AND MAX
// ================================
const clamp = (num, min, max) => Math.min(Math.max(num, min), max);
console.log(clamp(15, 0, 10)); // 10
console.log(clamp(-5, 0, 10)); // 0

// ================================
// 3. GENERATE RANDOM INTEGER IN RANGE [min, max]
// ================================
function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(randInt(1, 10)); // random number 1-10

// ================================
// 4. SWAP TWO VARIABLES (DESTRUCTURING)
// ================================
let a = 5,
  b = 10;
[a, b] = [b, a];
console.log(a, b); // 10 5

// Using math (no temp, no destructuring)
// a = a + b; b = a - b; a = a - b;

// ================================
// 5. IMPORTANT TIME COMPLEXITIES TO REMEMBER
// ================================
// Array access:        O(1)
// Array push/pop:      O(1)
// Array shift/unshift: O(n)
// Array sort:          O(n log n)
// Object get/set/has:  O(1) average
// Map get/set/has:     O(1) average
// Set add/has/delete:  O(1) average
// Binary search:       O(log n)
// BFS/DFS:             O(V + E)
// Heap insert/delete:  O(log n)
// Trie operations:     O(word length)
// String concat in loop: O(n²) — use array + join instead!
