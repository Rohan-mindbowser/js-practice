const arr = [1, 2, 3, 4, 5];

Array.prototype.myReducs = function (cb, initialValue) {
  let accumulator = initialValue;

  for (let i = 0; i < this.length; i++) {
    accumulator = cb(accumulator, this[i]);
  }

  return accumulator;
};

const res = arr.myReducs((acc, current) => {
  return acc + current;
}, 0);

console.log(res);
