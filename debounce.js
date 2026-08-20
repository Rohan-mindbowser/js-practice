function debounce(cb, delay = 1000) {
  let timer;

  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      cb();
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
