// ============================================================
// MATH TRICKS
// ============================================================

// ================================
// 1. GET LAST DIGIT OF A NUMBER
// ================================
console.log(1234 % 10); // 4

// ================================
// 2. REMOVE LAST DIGIT OF A NUMBER
// ================================
console.log(Math.floor(1234 / 10)); // 123
// or
console.log((1234 / 10) | 0); // 123 (bitwise truncation)

// ================================
// 3. COUNT DIGITS IN A NUMBER
// ================================
function countDigits(n) {
  return Math.floor(Math.log10(Math.abs(n))) + 1;
}
console.log(countDigits(12345)); // 5

// ================================
// 4. REVERSE A NUMBER
// ================================
function reverseNum(n) {
  let rev = 0;
  while (n > 0) {
    rev = rev * 10 + (n % 10);
    n = Math.floor(n / 10);
  }
  return rev;
}
console.log(reverseNum(1234)); // 4321

// ================================
// 5. CHECK PALINDROME NUMBER
// ================================
function isPalindromeNum(n) {
  return n === reverseNum(n);
}
console.log(isPalindromeNum(121)); // true
console.log(isPalindromeNum(123)); // false

// ================================
// 6. GCD (GREATEST COMMON DIVISOR) — EUCLIDEAN
// ================================
function gcd(a, b) {
  while (b) {
    [a, b] = [b, a % b];
  }
  return a;
}
console.log(gcd(12, 8)); // 4

// ================================
// 7. LCM (LEAST COMMON MULTIPLE)
// ================================
function lcm(a, b) {
  return (a * b) / gcd(a, b);
}
console.log(lcm(4, 6)); // 12

// ================================
// 8. CHECK IF PRIME — O(√n)
// ================================
function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}
console.log(isPrime(17)); // true
console.log(isPrime(18)); // false

// ================================
// 9. SIEVE OF ERATOSTHENES — ALL PRIMES UP TO N
// ================================
function sieve(n) {
  const primes = new Array(n + 1).fill(true);
  primes[0] = primes[1] = false;
  for (let i = 2; i * i <= n; i++) {
    if (primes[i]) {
      for (let j = i * i; j <= n; j += i) {
        primes[j] = false;
      }
    }
  }
  return primes.reduce((acc, val, idx) => (val ? [...acc, idx] : acc), []);
}
console.log(sieve(30)); // [2,3,5,7,11,13,17,19,23,29]

// ================================
// 10. MODULAR ARITHMETIC — AVOID OVERFLOW IN LARGE NUMBERS
// ================================
// (a + b) % mod = ((a % mod) + (b % mod)) % mod
// (a * b) % mod = ((a % mod) * (b % mod)) % mod
const MOD = 1e9 + 7;
function modAdd(a, b) {
  return ((a % MOD) + (b % MOD)) % MOD;
}
function modMul(a, b) {
  return ((a % MOD) * (b % MOD)) % MOD;
}

// ================================
// 11. FAST POWER (MODULAR EXPONENTIATION)
// ================================
function modPow(base, exp, mod) {
  let result = 1;
  base = base % mod;
  while (exp > 0) {
    if (exp & 1) result = (result * base) % mod;
    exp = exp >> 1;
    base = (base * base) % mod;
  }
  return result;
}
console.log(modPow(2, 10, 1000)); // 1024 % 1000 = 24

// ================================
// 12. FACTORIAL (ITERATIVE)
// ================================
function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) result *= i;
  return result;
}
console.log(factorial(5)); // 120

// ================================
// 13. nCr (COMBINATIONS) — PASCAL'S TRIANGLE METHOD
// ================================
function nCr(n, r) {
  if (r > n) return 0;
  if (r === 0 || r === n) return 1;
  let result = 1;
  for (let i = 0; i < r; i++) {
    result = (result * (n - i)) / (i + 1);
  }
  return Math.round(result);
}
console.log(nCr(5, 2)); // 10

// ================================
// 14. FIBONACCI — O(n) ITERATIVE
// ================================
function fibonacci(n) {
  if (n <= 1) return n;
  let prev = 0,
    curr = 1;
  for (let i = 2; i <= n; i++) {
    [prev, curr] = [curr, prev + curr];
  }
  return curr;
}
console.log(fibonacci(10)); // 55

// ================================
// 15. NUMBER OF SUBARRAYS = n*(n+1)/2
// ================================
// Total subarrays of array of length n
const n2 = 5;
console.log((n2 * (n2 + 1)) / 2); // 15

// ================================
// 16. SUM OF FIRST N NATURAL NUMBERS
// ================================
// 1 + 2 + ... + n = n*(n+1)/2
const n3 = 100;
console.log((n3 * (n3 + 1)) / 2); // 5050

// ================================
// 17. SUM OF SQUARES: 1² + 2² + ... + n²
// ================================
// = n*(n+1)*(2n+1)/6
const n4 = 10;
console.log((n4 * (n4 + 1) * (2 * n4 + 1)) / 6); // 385

// ================================
// 18. GEOMETRIC SERIES SUM
// ================================
// a + ar + ar² + ... + ar^(n-1) = a * (r^n - 1) / (r - 1) when r ≠ 1
function geometricSum(a, r, n) {
  return (a * (Math.pow(r, n) - 1)) / (r - 1);
}
console.log(geometricSum(1, 2, 10)); // 1023

// ================================
// 19. CEILING AND FLOOR DIVISION
// ================================
// Floor division (default for positive)
console.log(Math.floor(7 / 2)); // 3

// Ceiling division without Math.ceil
console.log(Math.ceil(7 / 2)); // 4
// Or: (a + b - 1) / b | 0
console.log(((7 + 2 - 1) / 2) | 0); // 4

// ================================
// 20. MANHATTAN DISTANCE
// ================================
// Distance between (x1,y1) and (x2,y2) on a grid
function manhattan(x1, y1, x2, y2) {
  return Math.abs(x1 - x2) + Math.abs(y1 - y2);
}
console.log(manhattan(1, 2, 4, 6)); // 7

// ================================
// 21. EUCLIDEAN DISTANCE
// ================================
function euclidean(x1, y1, x2, y2) {
  return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
}
console.log(euclidean(0, 0, 3, 4)); // 5
