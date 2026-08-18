async function expoBackOff(cb, retries = 3, delay = 1000) {
  const MAX_RETRIES = retries;
  let DELAY = delay;

  for (let i = 0; i < MAX_RETRIES; i++) {
    console.log("Interval->", i);
    await cb();
    console.log("CB called after delay->", DELAY);
    DELAY = DELAY * 2;
    await delayTask(DELAY);
    console.log("Task delayed for->", DELAY);
  }
}

async function delayTask(DELAY) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, DELAY);
  });
}

expoBackOff(async function cb(params) {
  return new Promise((resolve, reject) => {
    resolve();
  });
});
