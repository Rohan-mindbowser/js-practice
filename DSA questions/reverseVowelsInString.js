// Reverse only the vowels in a string using two pointers
function reverseVowels(s) {
  const vowels = new Set("aeiouAEIOU");
  const chars = s.split("");
  let left = 0;
  let right = chars.length - 1;

  while (left < right) {
    while (left < right && !vowels.has(chars[left])) left++;
    while (left < right && !vowels.has(chars[right])) right--;

    [chars[left], chars[right]] = [chars[right], chars[left]];
    left++;
    right--;
  }

  return chars.join("");
}

console.log(reverseVowels("helloworld")); // "hollowerld"
