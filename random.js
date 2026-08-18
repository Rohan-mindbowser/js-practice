console.log("start");

function heavyTask() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      for (let i = 0; i < 10000000000; i++) {}
      res("Heavy task completed");
    }, 0);
  });
}

heavyTask().then((res) => {
  console.log(res);
});

console.log("end");
