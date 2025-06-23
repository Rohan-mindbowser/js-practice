const s = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

function findSubString(word) {
  const hashMap = new Set();
  let ans = 0;
  let left = 0;
  for (let right = 0; right < word.length; right++) {
    while (hashMap.has(word[right])) {
      hashMap.delete(word[left]);
      left++;
    }
    hashMap.add(word[right]);
    ans = Math.max(ans, right - left + 1);
  }
  return ans;
}

console.log(findSubString(s));
