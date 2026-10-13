// console.log("start");

// function heavyTask() {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       for (let i = 0; i < 10000000000; i++) {}
//       res("Heavy task completed");
//     }, 0);
//   });
// }

// heavyTask().then((res) => {
//   console.log(res);
// });

// console.log("end");

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }

//   speak() {
//     console.log(`${this.name} makes a sound`);
//   }

//   // Arrow function as class field — "this" is always the instance
//   speakArrow = () => {
//     console.log(`${this.name} makes a sound (arrow)`);
//   };
// }

// const dog = new Animal("Dog");

// console.log(dog.name);

async function runWithLimit(tasks, limit) {
  const res = [];

  if (limit > tasks.length) {
    return Promise.allSettled(tasks);
  }

  let i = 0;

  while (i <= limit) {
    const ans = Promise.allSettled(
      tasks.slice(i, i + limit < limit ? i + limit : -1),
    );
    res.push(ans);
    i = i + limit;
  }

  return res;
}

const promises = [
  Promise.resolve("Task 1"),
  Promise.resolve("Task 2"),
  Promise.resolve("Task 3"),
  Promise.resolve("Task 4"),
];

runWithLimit(promises, 2).then((res) => {
  console.log(res);
});
