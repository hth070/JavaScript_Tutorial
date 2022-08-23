function numberFactorial(x) 
{ 

  if (x === 0)
 {
    return 1;
 }
  return x * numberFactorial(x-1);
         
}
console.log(numberFactorial(5));