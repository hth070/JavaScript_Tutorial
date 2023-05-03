function printGreaterNumber(num1, num2) {
    if (num1 > num2) {
      console.log(`The greater number is: ${num1}`);
    } else if (num2 > num1) {
      console.log(`The greater number is: ${num2}`);
    } else {
      console.log("The two numbers are equal.");
    }
  }

printGreaterNumber(4, 9);   // prints "The greater number is: 10"
printGreaterNumber(8, 4);   // prints "The greater number is: 10"
printGreaterNumber(2, 2);    // prints "The two numbers are equal."
