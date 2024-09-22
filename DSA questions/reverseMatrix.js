const arr = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
];

let res = JSON.parse(JSON.stringify(arr));

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    res[j][i] = arr[i][j];
  }
}

for (let i = 0; i < res.length; i++) {
  res[i].reverse();
}

console.table(arr);
console.table(res);
