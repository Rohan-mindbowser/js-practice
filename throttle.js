function throttle(callback, delay) {
  let isThrottled = false;

  return function (...args) {
    if (isThrottled) {
      console.log("Cancelled function call");
      return;
    }

    callback.apply(this, args);

    isThrottled = true;

    setTimeout(() => {
      isThrottled = false;
    }, delay);
  };
}

function saveDate() {
  console.log("Save date api called");
}

const throttledFunc = throttle(saveDate, 2000);

setInterval(() => {
  throttledFunc("Hello");
}, 200);
