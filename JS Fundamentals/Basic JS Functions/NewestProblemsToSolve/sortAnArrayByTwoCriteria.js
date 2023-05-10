function sortArray(arr) {
    arr.sort(function(a, b) {
      // first compare by length, then by alphabetical value
      if (a.length !== b.length) {
        return a.length - b.length;
      } else {
        return a.toLowerCase().localeCompare(b.toLowerCase());
      }
    });
  
    // print the sorted array
    for (var i = 0; i < arr.length; i++) {
      console.log(arr[i]);
    }
  }
  
  sortArray(['alpha', 'beta', 'gamma']);
// output:
// beta
// alpha
// gamma

sortArray(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
// output:
// Jack
// Isacc
// George
// Theodor
// Harrison

/*
•Sort an Array by 2 Criteria
Write a function that orders an array of strings, by their length in ascending order as primary criteria, and by alphabetical value in ascending order as second criteria. The comparison should be case-insensitive.
The input comes as an array of strings.
The output is the ordered array of strings, each on a separate line.
Examples
Input	Output		Input	Output
['alpha', 'beta', 'gamma']	beta
alpha
gamma		['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']	Jack
Isacc
George
Theodor
Harrison
*/