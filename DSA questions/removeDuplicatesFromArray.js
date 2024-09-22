//Using set
const arr = [0, 0, 0, 1];

const st = new Set();

arr.forEach((el) => st.add(el));

// console.log(Array.from(st));

//Without using set
const unique = [];
for (let i = 0; i < arr.length; i++) {
  let found = false;
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] === arr[j]) found = true;
  }
  if (!found) unique.push(arr[i]);
}

console.log(unique);
