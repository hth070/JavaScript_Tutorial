function limitValueInsideCertainRange(val, min, max) {
    return val < min ? min : (val > max ? max : val);
  }
  
  console.log(limitValueInsideCertainRange(7, 1, 12));
  console.log(limitValueInsideCertainRange(-7, 0, 12));
  console.log(limitValueInsideCertainRange(15, 0, 12));