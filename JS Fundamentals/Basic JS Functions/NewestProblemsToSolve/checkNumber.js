function checkNumber(num) {
    if (num < 100) {
      console.log("Less than 100");
    } else if (num >= 100 && num <= 200) {
      console.log("Between 100 and 200");
    } else {
      console.log("Greater than 200");
    }
  }
  
  // Примерни извиквания на функцията
  checkNumber(95); // Отпечатва "Less than 100"
  checkNumber(120); // Отпечатва "Between 100 and 200"
  checkNumber(210); // Отпечатва "Greater than 200"
  