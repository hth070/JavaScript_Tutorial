function variableNumericOrNot(num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
  }
  
  console.log(variableNumericOrNot(12));
  console.log(variableNumericOrNot('abcd'));
  console.log(variableNumericOrNot('12'));
  console.log(variableNumericOrNot(' '));
  console.log(variableNumericOrNot(1.20));
  console.log(variableNumericOrNot(-200));