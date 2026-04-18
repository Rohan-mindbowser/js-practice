const debounceInput = document.querySelector("#input");
const debounceValue = document.querySelector("#debounceValue");

/** Debounce */
function debounce(cb, delay = 1000) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => cb(...args), delay);
  };
}

function throttle(cb, delay = 2000) {
  let timer = null;

  return (...args) => {
    if (!timer) {
      cb(...args);
      timer = setTimeout(() => {
        timer = null;
      }, delay);
    }
  };
}

const debouncedUpdate = debounce((e) => {
  debounceValue.textContent = e.target.value;
}, 500);

const throttledLog = throttle(() => {
  console.log("Triggered");
}, 2000);

debounceInput.addEventListener("keyup", debouncedUpdate);
/** Debounce */
