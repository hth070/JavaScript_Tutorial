function returnsPowerOfTwoVals(num)
  {
     return num && (num & (num - 1)) === 0;
}

console.log(returnsPowerOfTwoVals(64));  
console.log(returnsPowerOfTwoVals(94));