const nthElement = (arr, n = 0) => (n > 0 ? arr.slice(n, n + 1) : arr.slice(n))[0];
console.log(nthElement(['f', 'x', 'j'], 1));
console.log(nthElement(['y', 'z', 'z'], -3));


//gets N-th element of a particualr array