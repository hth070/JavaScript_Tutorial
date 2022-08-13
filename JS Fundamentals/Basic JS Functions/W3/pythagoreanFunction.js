function pythagoreanFunction(x, y) {
    if ((typeof x !== 'number') || (typeof y !== 'number')) 
  return false; 
          return Math.sqrt(x * x + y * y);
      }
  
  console.log(pythagoreanFunction(3, 4));
  console.log(pythagoreanFunction(5, 6));