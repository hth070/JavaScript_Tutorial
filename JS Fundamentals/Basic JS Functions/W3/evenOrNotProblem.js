function evenOrNot(number)
{
  if (number < 0) 
  {
    number = Math.abs(number);
  }
  if (number===0) 
  {
    return true;
  }
  if (number===1) 
  {
    return false;
  }
  else 
  {
    number = number - 2;
    return is_even_recursion(number);
  }
}
console.log(evenOrNot(234)); //true
console.log(evenOrNot(-45)); // false
console.log(evenOrNot(65)); // fals