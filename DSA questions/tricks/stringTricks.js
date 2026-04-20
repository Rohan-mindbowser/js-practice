// ============================================================
// STRING TRICKS
// ============================================================

// ================================
// 1. CHARACTER FREQUENCY (26-SIZE ARRAY)
// ================================
// Store frequency of lowercase a-z in a fixed 26-size array
// 'a'.charCodeAt(0) = 97, so subtract 97 to map 'a'→0, 'b'→1 ... 'z'→25
function charFrequency(str) {
  const freq = new Array(26).fill(0);
  for (const ch of str) {
    freq[ch.charCodeAt(0) - 97]++;
  }
  return freq;
}
console.log(charFrequency("aabbc")); // [2,2,1,0,0,...0]

// ================================
// 2. CHECK IF TWO STRINGS ARE ANAGRAMS
// ================================
// Compare their frequency arrays
function isAnagram(a, b) {
  if (a.length !== b.length) return false;
  const freq = new Array(26).fill(0);
  for (let i = 0; i < a.length; i++) {
    freq[a.charCodeAt(i) - 97]++;
    freq[b.charCodeAt(i) - 97]--;
  }
  return freq.every((v) => v === 0);
}
console.log(isAnagram("listen", "silent")); // true

// ================================
// 3. FAST STRING REVERSE
// ================================
const str = "hello";
console.log(str.split("").reverse().join("")); // "olleh"
// or using spread
console.log([...str].reverse().join("")); // "olleh"

// ================================
// 4. CHECK PALINDROME STRING
// ================================
function isPalindromeStr(s) {
  let l = 0,
    r = s.length - 1;
  while (l < r) {
    if (s[l++] !== s[r--]) return false;
  }
  return true;
}
console.log(isPalindromeStr("racecar")); // true

// ================================
// 5. CONVERT STRING TO CHAR CODE & BACK
// ================================
console.log("A".charCodeAt(0)); // 65
console.log("a".charCodeAt(0)); // 97
console.log(String.fromCharCode(65)); // "A"
console.log(String.fromCharCode(97)); // "a"

// Get position in alphabet (0-indexed)
console.log("c".charCodeAt(0) - 97); // 2
console.log("C".charCodeAt(0) - 65); // 2

// ================================
// 6. QUICK ALPHABET STRING GENERATION
// ================================
const alphabet = Array.from({ length: 26 }, (_, i) =>
  String.fromCharCode(97 + i),
).join("");
console.log(alphabet); // "abcdefghijklmnopqrstuvwxyz"

// ================================
// 7. STRING → MAP OF CHAR COUNTS (USING MAP)
// ================================
function charCount(str) {
  const map = new Map();
  for (const ch of str) {
    map.set(ch, (map.get(ch) || 0) + 1);
  }
  return map;
}
console.log(charCount("aabbc")); // Map { 'a'=>2, 'b'=>2, 'c'=>1 }

// ================================
// 8. CHECK IF CHAR IS LETTER / DIGIT
// ================================
const isLetter = (ch) => /[a-zA-Z]/.test(ch);
const isDigit = (ch) => /[0-9]/.test(ch);
const isAlphaNumeric = (ch) => /[a-zA-Z0-9]/.test(ch);
console.log(isLetter("a"), isDigit("5"), isAlphaNumeric("@")); // true true false

// ================================
// 9. CHECK IF STRING HAS ALL UNIQUE CHARACTERS
// ================================
function allUnique(str) {
  return new Set(str).size === str.length;
}
console.log(allUnique("abcde")); // true
console.log(allUnique("aabcd")); // false

// ================================
// 10. NUMBER TO STRING WITH PADDING
// ================================
console.log(String(5).padStart(3, "0")); // "005"
console.log(String(42).padStart(5, "0")); // "00042"
