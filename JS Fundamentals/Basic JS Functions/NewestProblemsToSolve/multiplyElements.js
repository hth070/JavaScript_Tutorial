function multiplyElements(arr) {
    var result1 = arr[0] * arr[1];
    var result2 = arr[arr.length - 2] * arr[arr.length - 1];
  
    // print the results as separate lines
    console.log(result1);
    console.log(result2);
  }

  multiplyElements([2, 4, 3, 5, 6]);
// output:
// 12
// 20

multiplyElements([5, 5, 4, 6, 3, 10, 8]);
// output:
// 40
// 50

/*
•Multiply Elements
Write a function that receives as input array of numbers. Takes the first 2 elements and multiply them by the last 2 elements. 
The output is an array of numbers, which holds the 2 results, each on a separate line.

Examples
Input	Output		Input	Output
[2, 4, 3, 5, 6]	12
20		[5, 5, ,4, ,6 ,3, 10, 8]	40
50
*/
