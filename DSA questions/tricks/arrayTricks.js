// ============================================================
// ARRAY TRICKS
// ============================================================

// ================================
// 1. FAST MAX / MIN OF TWO NUMBERS
// ================================
console.log(Math.max(5, 10)); // 10
console.log(Math.min(5, 10)); // 5

// Max/min of an array
const arr = [3, 1, 4, 1, 5, 9];
console.log(Math.max(...arr)); // 9
console.log(Math.min(...arr)); // 1

// ================================
// 2. INITIALIZE 2D ARRAY (MATRIX)
// ================================
// WRONG: Array(3).fill(Array(3).fill(0)) ← all rows share same reference!
// CORRECT:
const matrix = Array.from({ length: 3 }, () => new Array(3).fill(0));
console.log(matrix); // [[0,0,0],[0,0,0],[0,0,0]]

// ================================
// 3. INITIALIZE 1D ARRAY WITH VALUES
// ================================
const zeros = new Array(5).fill(0); // [0,0,0,0,0]
const indices = Array.from({ length: 5 }, (_, i) => i); // [0,1,2,3,4]
console.log(zeros, indices);

// ================================
// 4. REMOVE DUPLICATES FROM ARRAY
// ================================
const dupes = [1, 2, 2, 3, 3, 4];
console.log([...new Set(dupes)]); // [1,2,3,4]

// ================================
// 5. FREQUENCY MAP USING OBJECT / MAP
// ================================
function freqMap(arr) {
  const map = {};
  for (const item of arr) {
    map[item] = (map[item] || 0) + 1;
  }
  return map;
}
console.log(freqMap([1, 2, 2, 3, 3, 3])); // {1:1, 2:2, 3:3}

// Using Map (better for non-string keys)
function freqMapUsingMap(arr) {
  const map = new Map();
  for (const item of arr) {
    map.set(item, (map.get(item) || 0) + 1);
  }
  return map;
}

// ================================
// 6. PREFIX SUM ARRAY
// ================================
// Precompute cumulative sums, then answer range sum queries in O(1)
function prefixSum(arr) {
  const prefix = [0];
  for (let i = 0; i < arr.length; i++) {
    prefix.push(prefix[i] + arr[i]);
  }
  return prefix;
}
// Sum of elements from index l to r (inclusive) = prefix[r+1] - prefix[l]
const ps = prefixSum([1, 2, 3, 4, 5]);
console.log(ps[4] - ps[1]); // sum of index 1..3 = 2+3+4 = 9

// ================================
// 7. KADANE'S ALGORITHM — MAX SUBARRAY SUM
// ================================
function maxSubarraySum(arr) {
  let maxSoFar = arr[0],
    maxEndingHere = arr[0];
  for (let i = 1; i < arr.length; i++) {
    maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }
  return maxSoFar;
}
console.log(maxSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6

// ================================
// 8. SLIDING WINDOW — FIXED SIZE K
// ================================
// Max sum of subarray of size k
function maxSumWindow(arr, k) {
  let windowSum = 0;
  for (let i = 0; i < k; i++) windowSum += arr[i];
  let maxSum = windowSum;
  for (let i = k; i < arr.length; i++) {
    windowSum += arr[i] - arr[i - k]; // slide: add right, remove left
    maxSum = Math.max(maxSum, windowSum);
  }
  return maxSum;
}
console.log(maxSumWindow([1, 4, 2, 10, 2, 3, 1, 0, 20], 4)); // 24

// ================================
// 9. TWO POINTER TECHNIQUE — PAIR SUM IN SORTED ARRAY
// ================================
function twoSumSorted(arr, target) {
  let l = 0,
    r = arr.length - 1;
  while (l < r) {
    const sum = arr[l] + arr[r];
    if (sum === target) return [l, r];
    else if (sum < target) l++;
    else r--;
  }
  return [-1, -1];
}
console.log(twoSumSorted([1, 2, 3, 4, 6], 6)); // [1, 3]

// ================================
// 10. FLATTEN A NESTED ARRAY
// ================================
console.log([1, [2, [3, [4]]]].flat(Infinity)); // [1,2,3,4]
// Flatten one level
console.log([1, [2, [3]]].flat()); // [1,2,[3]]

// ================================
// 11. CHECK IF ARRAY IS SORTED
// ================================
function isSorted(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) return false;
  }
  return true;
}
console.log(isSorted([1, 2, 3, 4])); // true
console.log(isSorted([1, 3, 2, 4])); // false

// ================================
// 12. ROTATE ARRAY BY K POSITIONS
// ================================
// Right rotate: [1,2,3,4,5] by 2 → [4,5,1,2,3]
function rotateRight(arr, k) {
  k = k % arr.length;
  return [...arr.slice(-k), ...arr.slice(0, -k)];
}
console.log(rotateRight([1, 2, 3, 4, 5], 2)); // [4,5,1,2,3]

// In-place rotation using reverse trick
function rotateInPlace(arr, k) {
  k = k % arr.length;
  reverse(arr, 0, arr.length - 1);
  reverse(arr, 0, k - 1);
  reverse(arr, k, arr.length - 1);
  return arr;
}
function reverse(arr, l, r) {
  while (l < r) [arr[l++], arr[r--]] = [arr[r], arr[l]];
}

// ================================
// 13. K SMALLEST / K LARGEST WITHOUT HEAP
// ================================
// Quick way to get k smallest/largest without a heap library
const kSmallest = (arr, k) => [...arr].sort((a, b) => a - b).slice(0, k);
const kLargest = (arr, k) => [...arr].sort((a, b) => b - a).slice(0, k);
console.log(kSmallest([3, 1, 5, 2, 4], 3)); // [1, 2, 3]

// ================================
// 14. SUM OF ARRAY
// ================================
const sumArr = [1, 2, 3, 4, 5];
console.log(sumArr.reduce((acc, v) => acc + v, 0)); // 15

// ================================
// 15. GET UNIQUE ELEMENTS PRESERVING ORDER
// ================================
const unique = (arr) => [...new Set(arr)];
console.log(unique([3, 1, 2, 1, 3])); // [3, 1, 2]

// ================================
// 16. INTERSECTION & UNION OF TWO ARRAYS
// ================================
const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];

// Union
console.log([...new Set([...arr1, ...arr2])]); // [1,2,3,4,5,6]

// Intersection
const setA = new Set(arr1);
console.log(arr2.filter((x) => setA.has(x))); // [3,4]

// Difference (in arr1 but not in arr2)
const setB = new Set(arr2);
console.log(arr1.filter((x) => !setB.has(x))); // [1,2]

// ================================
// 17. CONVERT NEGATIVE INDEX TO POSITIVE
// ================================
// Access arr[-1] as last element (Python-like)
console.log([10, 20, 30].at(-1)); // 30
console.log([10, 20, 30].at(-2)); // 20

// ================================
// 18. CONVERT MAP/OBJECT TO SORTED ARRAY
// ================================
// Sort by value descending
const freq = { a: 3, b: 1, c: 2 };
const sorted = Object.entries(freq).sort((x, y) => y[1] - x[1]);
console.log(sorted); // [['a',3], ['c',2], ['b',1]]

// ================================
// 19. PARTITION ARRAY AROUND PIVOT (DUTCH NATIONAL FLAG)
// ================================
// Sort array of 0s, 1s, 2s in one pass
function sortColors(arr) {
  let lo = 0,
    mid = 0,
    hi = arr.length - 1;
  while (mid <= hi) {
    if (arr[mid] === 0) {
      [arr[lo], arr[mid]] = [arr[mid], arr[lo]];
      lo++;
      mid++;
    } else if (arr[mid] === 1) {
      mid++;
    } else {
      [arr[mid], arr[hi]] = [arr[hi], arr[mid]];
      hi--;
    }
  }
  return arr;
}
console.log(sortColors([2, 0, 1, 2, 0, 1])); // [0,0,1,1,2,2]

// ================================
// 20. MONOTONIC STACK — NEXT GREATER ELEMENT
// ================================
function nextGreaterElement(arr) {
  const result = new Array(arr.length).fill(-1);
  const stack = []; // stores indices
  for (let i = 0; i < arr.length; i++) {
    while (stack.length && arr[stack[stack.length - 1]] < arr[i]) {
      result[stack.pop()] = arr[i];
    }
    stack.push(i);
  }
  return result;
}
console.log(nextGreaterElement([4, 5, 2, 10, 8])); // [5, 10, 10, -1, -1]

// ================================
// 21. INTERVAL MERGE
// ================================
function mergeIntervals(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  const merged = [intervals[0]];
  for (let i = 1; i < intervals.length; i++) {
    const last = merged[merged.length - 1];
    if (intervals[i][0] <= last[1]) {
      last[1] = Math.max(last[1], intervals[i][1]);
    } else {
      merged.push(intervals[i]);
    }
  }
  return merged;
}
console.log(
  mergeIntervals([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ]),
);
// [[1,6],[8,10],[15,18]]
