function maxNumber(input) {
    if (toString.call(input) !== "[object Array]")  
      return false;
 return Math.max.apply(null, input);
   }

console.log(maxNumber([22,43,530,52]));
console.log(maxNumber([-19,-44,0,-86,-1]));