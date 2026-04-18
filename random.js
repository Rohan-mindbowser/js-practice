// const obj1 = {
//   name: "rohan",
// };

// Object.prototype.getName = function () {
//   console.log("name is", this.name);
// };

// obj1.getName()

console.log(1);

setTimeout(() => {
  console.log(2);
}, 0);

Promise.resolve().then(() => {
  console.log(4);
});

console.log(3);
