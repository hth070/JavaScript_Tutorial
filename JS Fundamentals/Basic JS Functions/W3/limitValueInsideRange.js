function valueInsideRange(val, min, max) {
    return val < min ? min : (val > max ? max : val);
  }
  
  console.log(valueInsideRange(10, 1, 12));
  console.log(valueInsideRange(-7, 3, 12));
  console.log(valueInsideRange(15, 0, 12));