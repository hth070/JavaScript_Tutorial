function highestArrayValue(input) {
    if (toString.call(input) !== "[object Array]")  
      return false;
 return Math.highestArrayValue.apply(null, input);
   }

console.log(highestArrayValue([12,34,56,1]));
console.log(highestArrayValue([-12,-34,0,-56,-1]));
