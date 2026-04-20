// ============================================================
// SEARCHING & SORTING TRICKS
// ============================================================

// ================================
// 1. BINARY SEARCH
// ================================
function binarySearch(arr, target) {
  let lo = 0,
    hi = arr.length - 1;
  while (lo <= hi) {
    const mid = lo + ((hi - lo) >> 1); // avoid overflow, same as Math.floor((lo+hi)/2)
    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) lo = mid + 1;
    else hi = mid - 1;
  }
  return -1;
}
console.log(binarySearch([1, 3, 5, 7, 9], 7)); // 3

// ================================
// 2. LOWER BOUND (FIRST POSITION >= TARGET)
// ================================
function lowerBound(arr, target) {
  let lo = 0,
    hi = arr.length;
  while (lo < hi) {
    const mid = lo + ((hi - lo) >> 1);
    if (arr[mid] < target) lo = mid + 1;
    else hi = mid;
  }
  return lo;
}
console.log(lowerBound([1, 2, 4, 4, 5], 4)); // 2

// ================================
// 3. UPPER BOUND (FIRST POSITION > TARGET)
// ================================
function upperBound(arr, target) {
  let lo = 0,
    hi = arr.length;
  while (lo < hi) {
    const mid = lo + ((hi - lo) >> 1);
    if (arr[mid] <= target) lo = mid + 1;
    else hi = mid;
  }
  return lo;
}
console.log(upperBound([1, 2, 4, 4, 5], 4)); // 4

// ================================
// 4. SORT COMPARATORS
// ================================
// Sort numbers ascending
[3, 1, 2].sort((a, b) => a - b); // [1, 2, 3]

// Sort numbers descending
[3, 1, 2].sort((a, b) => b - a); // [3, 2, 1]

// Sort strings by length
["cat", "a", "ab"].sort((a, b) => a.length - b.length); // ["a","ab","cat"]

// Sort objects by property
[{ age: 30 }, { age: 20 }].sort((a, b) => a.age - b.age);
