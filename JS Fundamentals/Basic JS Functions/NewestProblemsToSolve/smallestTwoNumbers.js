let arr1 = [30, 15, 50, 5];
let arr2 = [3, 0, 10, 4, 7, 3];

let smallestTwoArr1 = arr1.sort((a, b) => a - b).slice(0, 2);
let smallestTwoArr2 = arr2.sort((a, b) => a - b).slice(0, 2);

console.log(smallestTwoArr1); // [5, 15]
console.log(smallestTwoArr2); // [0, 3]

[5, 15]
[0, 3]
