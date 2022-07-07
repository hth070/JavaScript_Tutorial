function numbers_ranges(x, y) {
    if ((x >= 75 && x <= 130 && y >= 75 && y <= 130) 
        || 
        (x >= 150 && x <= 194 && y >= 150 && y <= 194))
       {
      return true;
       } 
      else 
       {
      return false;
    }
  }
  
  console.log(numbers_ranges(83, 115));
  console.log(numbers_ranges(76, 190));
  console.log(numbers_ranges(179, 190));