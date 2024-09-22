const arr1 = [0, 3];
const arr2 = [4, 6, 30];

let i = 0;
let j = 0;

const ans = [];

while (i < arr1.length && j < arr2.length) {
  if (arr1[i] < arr2[j]) {
    ans.push(arr1[i]);
    i++;
  } else if (arr1[i] > arr2[j]) {
    ans.push(arr2[j]);
    j++;
  } else {
    ans.push(arr1[i]);
    ans.push(arr2[j]);
    i++;
    j++;
  }
}

if (i < arr1.length) {
  for (let k = i; k < arr1.length; k++) {
    ans.push(arr1[k]);
  }
}

if (j < arr2.length) {
  for (let k = j; k < arr2.length; k++) {
    ans.push(arr2[k]);
  }
}

console.log(ans);
