function wholeOrDecimal(n)
{
   var result = (n - Math.floor(n)) !== 0; 
   
  if (result)
    return 'Number has a decimal place.';
   else
     return 'It is a whole number.';
  }

console.log(wholeOrDecimal(25.66));

console.log(wholeOrDecimal(10));