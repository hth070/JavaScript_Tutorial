function findCombination(start, end, magicNumber) {
    let combinationCount = 0;
    let foundCombination = false;
  
    for (let i = start; i <= end; i++) {
      for (let j = start; j <= end; j++) {
        combinationCount++;
  
        if (i + j === magicNumber) {
          foundCombination = true;
          console.log(`Combination N:${combinationCount} (${i} + ${j} = ${magicNumber})`);
          break;
        }
      }
  
      if (foundCombination) {
        break;
      }
    }
  
    if (!foundCombination) {
      console.log(`${combinationCount} combinations - neither equals ${magicNumber}`);
    }
  }
  
  // Извикване на функцията и отпечатване на резултата
  findCombination(1, 10, 5);     // Combination N:4 (1 + 4 = 5)
  findCombination(88, 888, 1000);// Combination N:20025 (112 + 888 = 1000)
  findCombination(23, 24, 20);   // 4 combinations - neither equals 20
  findCombination(88, 888, 2000);// 641601 combinations - neither equals 2000
  