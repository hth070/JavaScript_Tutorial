function searchForNumber(arr, commands) {
    // take the first n elements of the array
    let n = commands[0];
    let taken = arr.slice(0, n);
  
    // delete the first k elements of the taken array
    let k = commands[1];
    taken.splice(0, k);
  
    // count the number of occurrences of the search number in the taken array
    let searchNumber = commands[2];
    let count = taken.filter(function(num) { return num === searchNumber; }).length;
  
    // print the result
    console.log(`Number ${searchNumber} occurs ${count} times.`);
  }
  
  searchForNumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);
// output: "Number 3 occurs 1 times."

searchForNumber([7, 1, 5, 8, 2, 7], [3, 1, 5]);
// output: "Number 5 occurs 1 times."
