function countCombinations(n) {
    let validCombinationsCount = 0;
  
    for (let x1 = 0; x1 <= n; x1++) {
      for (let x2 = 0; x2 <= n; x2++) {
        for (let x3 = 0; x3 <= n; x3++) {
          if (x1 + x2 + x3 === n) {
            validCombinationsCount++;
          }
        }
      }
    }
  
    return validCombinationsCount;
  }
  
  // Извикване на функцията и отпечатване на резултата
  console.log(countCombinations(25)); // 351
  console.log(countCombinations(20)); // 231
  console.log(countCombinations(5));  // 21
  