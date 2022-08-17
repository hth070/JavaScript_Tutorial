function greatestCommonDivisorOfTwoInts(x, y) {
    if ((typeof x !== 'number') || (typeof y !== 'number')) 
      return false;
    x = Math.abs(x);
    y = Math.abs(y);
    while(y) {
      var t = y;
      y = x % y;
      x = t;
    }
    return x;
  }
  
  console.log(greatestCommonDivisorOfTwoInts(12, 13));
  console.log(greatestCommonDivisorOfTwoInts(9, 3));