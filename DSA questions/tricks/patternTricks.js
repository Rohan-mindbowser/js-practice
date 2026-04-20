// ============================================================
// PATTERN / TEMPLATE TRICKS (Backtracking, Memoization, DP)
// ============================================================

// ================================
// 1. GENERATE ALL PERMUTATIONS
// ================================
function permutations(arr) {
  if (arr.length <= 1) return [arr];
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const rest = [...arr.slice(0, i), ...arr.slice(i + 1)];
    for (const perm of permutations(rest)) {
      result.push([arr[i], ...perm]);
    }
  }
  return result;
}
console.log(permutations([1, 2, 3]).length); // 6

// ================================
// 2. BACKTRACKING TEMPLATE
// ================================
function backtrack(result, current, choices, startIndex) {
  // Base case: if valid solution, add to result
  // if (condition) { result.push([...current]); return; }
  for (let i = startIndex; i < choices.length; i++) {
    current.push(choices[i]); // make choice
    backtrack(result, current, choices, i + 1); // recurse
    current.pop(); // undo choice (backtrack)
  }
}
// Usage: const result = []; backtrack(result, [], arr, 0);

// ================================
// 3. MEMOIZATION TEMPLATE
// ================================
function memoize(fn) {
  const cache = new Map();
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);
    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  };
}
// Usage: const memoFib = memoize((n) => n <= 1 ? n : memoFib(n-1) + memoFib(n-2));

// ================================
// 4. DEBOUNCE — DELAY EXECUTION
// ================================
function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

// ================================
// 5. THROTTLE — LIMIT EXECUTION RATE
// ================================
function throttle(fn, limit) {
  let inThrottle = false;
  return function (...args) {
    if (!inThrottle) {
      fn.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}
