function printNumberPyramid(n) {
    let counter = 1;
    let currentLine = 1;
    let printCurrentLine = '';
  
    for (let i = 1; i <= n; i++) {
      printCurrentLine = '';
      for (let j = 1; j <= currentLine; j++) {
        if (counter > n) {
          break;
        }
        printCurrentLine += counter + ' ';
        counter++;
      }
      console.log(printCurrentLine);
      if (counter > n) {
        break;
      }
      currentLine++;
    }
  }
  
  // Example usage:
  printNumberPyramid(7);
  // Output:
  // 1
  // 2 3
  // 4 5 6
  // 7
  
  printNumberPyramid(12);
  // Output:
  // 1
  // 2 3
  // 4 5 6
  // 7 8 9 10
  // 11 12
  
  printNumberPyramid(15);
  // Output:
  // 1
  // 2 3
  // 4 5 6
  // 7 8 9 10
  // 11 12 13 14 15
  