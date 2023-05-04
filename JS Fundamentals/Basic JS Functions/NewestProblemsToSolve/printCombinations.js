function printCombinations(a, b, c) {
    for (let i = 1; i <= 3; i++) {
      for (let j = 1; j <= 3; j++) {
        for (let k = 1; k <= 3; k++) {
          console.log(`${i}${j}${k}`);
        }
      }
    }
  }

printCombinations(1, 2, 3);
