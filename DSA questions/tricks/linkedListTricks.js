// ============================================================
// LINKED LIST TRICKS
// ============================================================

// ================================
// 1. FAST & SLOW POINTER — CYCLE DETECTION (FLOYD'S)
// ================================
// Floyd's Tortoise & Hare — detect cycle in O(1) space
function hasCycle(head) {
  let slow = head,
    fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }
  return false;
}

// ================================
// 2. FIND MIDDLE OF LINKED LIST
// ================================
// Slow pointer moves 1 step, fast moves 2. When fast reaches end, slow is at middle.
function findMiddle(head) {
  let slow = head,
    fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow; // middle node
}

// ================================
// 3. REVERSE A LINKED LIST
// ================================
// Iterative: maintain prev, curr, next pointers
function reverseList(head) {
  let prev = null,
    curr = head;
  while (curr) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
}
