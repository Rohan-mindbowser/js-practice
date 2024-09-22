const s = "123456";

// console.log(s.substring(0, 3));

//Using builtin functions
function longestWord(s) {
  let words = s.split(" ");
  let word = words[0];
  if (words.length === 1) return word;

  words.forEach((e) => {
    if (e.length > word.length) word = e;
  });

  return word;
}
