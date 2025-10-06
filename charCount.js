function charCount(str) {
  //make object to hold char counts
  //loop over string, for each char
  //if char is a number/letter AND is a key in object, add one to count
  //if char is a number/letter AND not in object, add it and set value to 1
  //if char is something else (space, period, etc.) don't do anything
  //return object at end

  let res = {};

  for (let c of str.toLowerCase()) {
    if (/[a-z0-9]/.test(c)) {
      if (c in res) {
        res[c]++;
      } else {
        res[c] = 1;
      }
    }
  }
  return res;
}
console.log(charCount("Lucas Andrade"));
