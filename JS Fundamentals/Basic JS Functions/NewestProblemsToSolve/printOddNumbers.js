function printOddNumbers(n) {
    let i = 1;
    while (i <= n) {
      if (i % 2 !== 0) {
        console.log(i);
      }
      i++;
    }
  }

printOddNumbers(5); // 1 3 5
printOddNumbers(10); // 1 3 5 7 9
