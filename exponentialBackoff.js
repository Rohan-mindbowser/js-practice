async function expoBackOff(cb, retries = 3, delay = 1000) {
  let lastError;

  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      return await cb(); // success → exit immediately
    } catch (err) {
      lastError = err;
      if (attempt === retries) break; // no more retries, don't wait
      console.log(`Attempt ${attempt + 1} failed, retrying in ${delay}ms`);
      await delayTask(delay);
      delay *= 2;
    }
  }

  throw lastError; // let the caller decide what to do
}

function delayTask(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Usage: a callback that fails twice, then succeeds
let calls = 0;
expoBackOff(async () => {
  calls++;
  if (calls < 3) throw new Error(`fail #${calls}`);
  return "success";
})
  .then((res) => console.log("Result:", res))
  .catch((err) => console.error("All retries failed:", err.message));
