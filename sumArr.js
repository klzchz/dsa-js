function sumArr(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

console.log(sumArr([1, 2, 3])); // 6
console.log(sumArr([10, 20, 30, 40, 50])); // 150