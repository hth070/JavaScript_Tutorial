function digitsOfIntCounter(n) {
    var count = 0;
    if (n >= 1) ++count;
  
    while (n / 10 >= 1) {
      n /= 10;
      ++count;
    }
  
    return count;
  }
  
  console.log(digitsOfIntCounter(12112));
  
  console.log(digitsOfIntCounter(457));