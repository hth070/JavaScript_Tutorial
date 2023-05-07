function findCommonElements(arr1, arr2) {
    for (let elem of arr1) {
      if (arr2.includes(elem)) {
        console.log(elem);
      }
    }
  }
  
  // Example usage:
  findCommonElements(
    ["Hey", "hello", 2, 4, "Peter", "e"],
    ["Petar", 10, "hey", 4, "hello", "2"]
  );


/*|
Output should be:
hello
4
*/
