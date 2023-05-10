function sortAlternating(arr) {
    // sort the input array in descending order
    arr.sort(function(a, b) { return b - a; });
  
    // create an output array with the same length as the input array
    var output = new Array(arr.length);
  
    // iterate over the input array and insert elements in alternating positions
    for (var i = 0; i < arr.length; i++) {
      if (i % 2 == 0) {
        output[i] = arr[Math.floor(i / 2)];
      } else {
        output[i] = arr[arr.length - Math.floor(i / 2) - 1];
      }
    }
  
    // convert the output array to a string and return it
    return output.join(' ');
  }
  
  console.log(sortAlternating([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]));
  // output: "94 1 69 2 63 3 52 18 31 21"
  
  console.log(sortAlternating([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]));
  // output: "690 2 47 6 45 7 34 19 32 32"  


/*
•Sorting
Write a function that sorts an array of numbers so that the first element is the biggest one, the second is the smallest one, the third is the second biggest one, and the fourth is the second smallest one and so on. 
Print the elements on one row, separated by single space.
Examples
Input	Output
[1, 21, 3, 52, 69, 63, 31, 2, 18, 94]	94 1 69 2 63 3 52 18 31 21
[34, 2, 32, 45, 690, 6, 32, 7, 19, 47]	690 2 47 6 45 7 34 19 32 32
*/