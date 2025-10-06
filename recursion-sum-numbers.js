/* sum only numbers only array even if the input is nested */
function sumNumbers(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            sum += sumNumbers(arr[i]);
        } else if (typeof arr[i] === "number") {
            sum += arr[i];
        }
    }
    return sum;
}

//explain the divide and conquer in this process
/*
The divide and conquer approach in this process is evident in the way the function handles nested arrays. When the function encounters a nested array, it calls itself recursively on that sub-array (the "divide" step), effectively breaking the problem down into smaller, more manageable pieces. Each recursive call processes its own array, summing the numbers within it.

Once the base case is reached (an array with no more nested arrays), the function returns the sum of the numbers found. As the recursive calls return, the sums are combined (the "conquer" step) to produce the final result.

This approach allows the function to handle arbitrarily nested arrays without needing to know the structure of the input in advance.
*/

console.log(sumNumbers([1, [2, 3], 4, [5, [6]], "7", null, undefined, [8, 9]])); // Output: 38