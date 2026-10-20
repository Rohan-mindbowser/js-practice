// The task is to group consecutive numbers into ranges.
// For example, given:
// [1, 2, 3, 5, 7, 8, 9]
// The expected result is:
// "1-3, 5, 7-9"

const getRange = (arr) => {
  const ans = [];
  const sortedArr = [...arr].sort((a, b) => a - b);

  let i = 0; // start of current range
  let j = 0;
  const n = sortedArr.length;

  while (j < n) {
    // range ends at j if next element isn't exactly +1 (or j is the last element)
    if (j === n - 1 || sortedArr[j + 1] - sortedArr[j] !== 1) {
      ans.push(i === j ? `${sortedArr[i]}` : `${sortedArr[i]}-${sortedArr[j]}`);
      i = j + 1;
    }
    j++;
  }

  return ans.join(", ");
};

console.log(getRange([1, 3, 2, 4, 5, 6, 9, 8, 7])); // "1-9"
console.log(getRange([1, 2, 3, 5, 7, 8, 9])); // "1-3, 5, 7-9"
console.log(getRange([10])); // "10"
console.log(getRange([])); // ""
