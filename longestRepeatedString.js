function charCount(str) {
  //make object to hold char counts
  //loop over string, for each char
  //if char is a number/letter AND is a key in object, add one to count
  //if char is a number/letter AND not in object, add it and set value to 1
  //if char is something else (space, period, etc.) don't do anything
  //return object at end

  let res = {};
  let count = 0;
  let maxChar = "";

  for (let c of str.toLowerCase()) {
    if (/[a-z0-9]/.test(c)) {
      if (c in res) {
        res[c]++;
      } else {
        res[c] = 1;
      }

      count = Math.max(count, res[c]);
      if (res[c] >= count) maxChar = c;
    }
  }
  return { maxSub: count, maxChar: maxChar };
  //   return res;
}
console.log(charCount("Lucaaaaasssss Andrade"));
