// ============================================================
// BIT MANIPULATION TRICKS
// ============================================================

// =====================
// 1. DECIMAL TO BINARY
// =====================
// Convert a number to its binary string representation
const num = 10;
console.log(num.toString(2)); // "1010"
console.log((255).toString(2)); // "11111111"

// Binary to decimal
console.log(parseInt("1010", 2)); // 10

// Decimal to hex / octal
console.log((255).toString(16)); // "ff"
console.log((8).toString(8)); // "10"

// ================================
// 2. CHECK IF NUMBER IS POWER OF 2
// ================================
// Powers of 2 have exactly one bit set: 8 = 1000, 8-1 = 0111, & = 0
function isPowerOf2(n) {
  return n > 0 && (n & (n - 1)) === 0;
}
console.log(isPowerOf2(16)); // true
console.log(isPowerOf2(18)); // false

// ================================
// 3. FLOOR DIVISION BY 2 (RIGHT SHIFT)
// ================================
// >> 1 is equivalent to Math.floor(n/2) for positive integers
console.log(10 >> 1); // 5
console.log(7 >> 1); // 3

// ================================
// 4. MULTIPLY BY 2 (LEFT SHIFT)
// ================================
console.log(5 << 1); // 10
console.log(3 << 2); // 12 (multiply by 4)

// ================================
// 5. CHECK IF NUMBER IS ODD/EVEN WITH BITWISE
// ================================
// Last bit is 1 for odd, 0 for even
function isOdd(n) {
  return (n & 1) === 1;
}
console.log(isOdd(5)); // true
console.log(isOdd(4)); // false

// ================================
// 6. GET i-th BIT OF A NUMBER
// ================================
function getBit(num, i) {
  return (num >> i) & 1;
}
console.log(getBit(10, 1)); // 10 = 1010, bit at pos 1 → 1

// ================================
// 7. SET i-th BIT TO 1
// ================================
function setBit(num, i) {
  return num | (1 << i);
}
console.log(setBit(10, 0)); // 1010 → 1011 = 11

// ================================
// 8. CLEAR i-th BIT (SET TO 0)
// ================================
function clearBit(num, i) {
  return num & ~(1 << i);
}
console.log(clearBit(11, 0)); // 1011 → 1010 = 10

// ================================
// 9. TOGGLE i-th BIT
// ================================
function toggleBit(num, i) {
  return num ^ (1 << i);
}
console.log(toggleBit(10, 0)); // 1010 → 1011 = 11

// ================================
// 10. COUNT SET BITS (BRIAN KERNIGHAN)
// ================================
function countSetBits(n) {
  let count = 0;
  while (n) {
    n = n & (n - 1); // removes lowest set bit
    count++;
  }
  return count;
}
console.log(countSetBits(15)); // 1111 → 4

// ================================
// 11. XOR TRICKS
// ================================
// XOR of a number with itself = 0:  a ^ a = 0
// XOR of a number with 0 = itself:  a ^ 0 = a
// Find single non-duplicate in array where every other appears twice
function singleNumber(nums) {
  return nums.reduce((xor, n) => xor ^ n, 0);
}
console.log(singleNumber([2, 1, 4, 1, 2])); // 4

// ================================
// 12. SWAP TWO VARIABLES WITHOUT TEMP (XOR)
// ================================
let a = 5,
  b = 10;
a = a ^ b;
b = a ^ b;
a = a ^ b;
console.log(a, b); // 10 5

// Using destructuring (cleanest)
[a, b] = [b, a];

// ================================
// 13. CONVERT UPPERCASE ↔ LOWERCASE WITH XOR
// ================================
// 'A' ^ 32 = 'a', 'a' ^ 32 = 'A' (toggles case)
console.log(String.fromCharCode("A".charCodeAt(0) ^ 32)); // 'a'
console.log(String.fromCharCode("a".charCodeAt(0) ^ 32)); // 'A'

// To lowercase: OR with 32
// To uppercase: AND with ~32 (i.e., & 0xDF)

// ================================
// 14. INVERT / FLIP BITS
// ================================
// ~n gives -(n+1) in JS due to two's complement
console.log(~5); // -6
console.log(~~3.7); // 3 (double NOT = truncate to integer, like Math.trunc)

// ================================
// 15. FIND ALL SUBSETS (POWER SET) — BIT MASKING
// ================================
function subsets(arr) {
  const result = [];
  const n = arr.length;
  for (let mask = 0; mask < 1 << n; mask++) {
    const subset = [];
    for (let i = 0; i < n; i++) {
      if (mask & (1 << i)) subset.push(arr[i]);
    }
    result.push(subset);
  }
  return result;
}
console.log(subsets([1, 2, 3]));
// [[], [1], [2], [1,2], [3], [1,3], [2,3], [1,2,3]]

// ================================
// 16. CHECK IF STRING HAS ALL UNIQUE CHARACTERS (BITMASK)
// ================================
// Only works for lowercase a-z (26 chars fit in 32-bit int)
function allUniqueBitmask(str) {
  let checker = 0;
  for (const ch of str) {
    const bit = 1 << (ch.charCodeAt(0) - 97);
    if (checker & bit) return false;
    checker |= bit;
  }
  return true;
}
console.log(allUniqueBitmask("abcde")); // true
console.log(allUniqueBitmask("aabcd")); // false

// ================================
// 17. QUICK SET OPERATIONS WITH BITMASKING
// ================================
// Represent a small set (up to 32 elements) as bits in an integer
// Add element i:    set |= (1 << i)
// Remove element i: set &= ~(1 << i)
// Check element i:  (set >> i) & 1
// Union:            setA | setB
// Intersection:     setA & setB
// Size:             countSetBits(set) — see trick #10
