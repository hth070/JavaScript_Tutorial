function printSequence(n) {
    let number = 1;
    while (number <= n) {
      console.log(number);
      number = number * 2 + 1;
    }
  }
  
  // Извикване на функцията и отпечатване на резултата
  printSequence(3);   // 1 \n 3 \n
  printSequence(8);   // 1 \n 3 \n 7 \n
  printSequence(17);  // 1 \n 3 \n 7 \n 15 \n
  printSequence(31);  // 1 \n 3 \n 7 \n 15 \n 31 \n
  