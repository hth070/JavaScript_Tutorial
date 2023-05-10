function distinctArray(arr) {
    let distinctSet = new Set(arr);
    let distinctArr = Array.from(distinctSet);
    return distinctArr.join(' ');
}

console.log(distinctArray([1, 2, 3, 4])); // 1 2 3 4
console.log(distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2])); // 7 8 9 2 3 4 1
console.log(distinctArray([20, 8, 12, 13, 4, 4, 8, 5])); // 20 8 12 13 4 5
