function debounce(callback, delay) {
  let timer;

  return function (...args) {
    const context = this;

    clearTimeout(timer);

    timer = setTimeout(() => {
      callback.apply(context, args);
    }, delay);
  };
}

const saveDate = () => {
  console.log("Save date API called");
};

const debouncedFunc = debounce(saveDate, 2000);

setTimeout(() => {
  debouncedFunc();
}, 500);

setTimeout(() => {
  debouncedFunc();
}, 800);

setTimeout(() => {
  debouncedFunc();
}, 900);
