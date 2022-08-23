function lowestArrayValue(input) {
    if (toString.call(input) !== "[object Array]")  
      return false;
 return Math.lowestArrayValue.apply(null, input);
   }

console.log(lowestArrayValue([12,34,56,1]));
console.log(lowestArrayValue([-12,-34,0,-56,-1]));