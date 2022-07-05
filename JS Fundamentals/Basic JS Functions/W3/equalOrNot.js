const allEqual = arr => arr.every(val => val === arr[0]);
console.log(allEqual([2, 4, 6, 8, 10, 12]));
console.log(allEqual([3.14, 3.14,, 3.14,, 3.14,]));