const p1 = new Promise((res, rej) => res("completed 1..!!"));
const p2 = new Promise((res, rej) => res("completed 2..!!"));
const p3 = new Promise((res, rej) => {
  setTimeout(() => {
    rej("Promise 3 rejected");
  }, 3000);
});

Promise.allSettled([p1, p2, p3])
  .then((res) => {
    console.log("response", res);
  })
  .catch((err) => {
    console.log("error", err);
  });
