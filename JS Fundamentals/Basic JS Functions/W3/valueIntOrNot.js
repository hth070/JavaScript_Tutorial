function valueIntOrNot(num) {
  
    if (typeof num !== 'number')
        return false; 
   
   return !isNaN(num) && 
          parseInt(Number(num)) == num && 
          !isNaN(parseInt(num, 10));
 }
 console.log(valueIntOrNot(23));
 console.log(valueIntOrNot(4e2));
 console.log(valueIntOrNot(NaN));
 console.log(valueIntOrNot(23.75));
 console.log(valueIntOrNot(-23));