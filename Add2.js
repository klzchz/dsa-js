function addupTo(n) {
    return n * (n + 1) / 2;
}

// console.log(addupTo(3)); // 6
// console.log(addupTo(6)); // 21
// console.log(addupTo(10)); // 55
// console.log(addupTo(100)); // 5050

var t1 = performance.now();
console.log(addupTo(100)); // 5050
var t2 = performance.now();
console.log("Call to addupTo took " + (t2 - t1) + " milliseconds.");