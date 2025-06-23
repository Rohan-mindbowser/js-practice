const word =
  "aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz".repeat(100) +
  "Q" +
  "aabbcc";

const store = new Map();

for (let i = 0; i < word.length; i++) {
  if (store.has(word[i])) {
    let storedElement = store.get(word[i]);
    storedElement.index = i;
    storedElement.value += 1;
    store.set(word[i], { ...storedElement });
  } else {
    store.set(word[i], { index: i, value: 1 });
  }
}

for (let [_, value] of store) {
  if (value.value === 1) {
    console.log("First non repeating characters index-->", value.index);
    break;
  }
}
