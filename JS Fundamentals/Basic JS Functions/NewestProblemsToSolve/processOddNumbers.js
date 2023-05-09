const nums = [10, 15, 20, 25];

const result = nums
  .filter((num, index) => index % 2 !== 0) // Filter odd positions
  .map(num => num * 2) // Double the filtered elements
  .reverse(); // Reverse the resulting array

console.log(result); // [50, 30]

[50, 30]


/*
Process Odd Numbers
▪ You	are	given	an	array	of	numbers
▪ Print	the	elements	at	odd	positions,	doubled	and	
reversed
10
15
20
25
50	30
*/