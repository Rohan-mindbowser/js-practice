const s = "axcav";

function findLongest(s) {
  let left = 0;
  let longest = 0;
  const st = new Set();

  for (let right = 0; right < s.length; right++) {
    // shrink the window from the left until s[right] is no longer a duplicate
    while (st.has(s[right])) {
      st.delete(s[left]);
      left++;
    }

    st.add(s[right]);
    longest = Math.max(longest, right - left + 1);
  }

  return longest;
}

console.log(findLongest(s)); // 6 -> "cdefab"
