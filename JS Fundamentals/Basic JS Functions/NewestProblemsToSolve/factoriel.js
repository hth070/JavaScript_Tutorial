function factorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }
  
  // Извикване на функцията и отпечатване на резултата
  console.log(factorial(4)); // 24
  console.log(factorial(8)); // 40320
  