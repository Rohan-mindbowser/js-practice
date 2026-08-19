// flatten a nested array with a custom ordering requirement, where:

// Top-level elements were processed first
// Nested elements were processed later

const flatten = (arr) => {
  const topLevel = [];
  const nested = [];
  const processedNested = [];

  const processTopLevel = (items) => {
    for (let i = 0; i < items.length; i++) {
      if (Array.isArray(items[i])) {
        nested.push(items[i]);
      } else {
        topLevel.push(items[i]);
      }
    }
  };

  processTopLevel(arr);

  const processNested = (items) => {
    for (let i = 0; i < items.length; i++) {
      if (Array.isArray(items[i])) {
        processNested(items[i]);
      } else {
        processedNested.push(items[i]);
      }
    }
  };

  processNested(nested);

  return [...topLevel, ...processedNested];
};
const arr = [1, [2, 3], 4, [5, [6, 7]], 8];

const result = flatten(arr);

console.log("Flatten -->", result);
