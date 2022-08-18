randomInt = function(min, max) {
    if (min==null && max==null)
      return 0;    
    
    if (max == null) {
        max = min;
        min = 0;
      }
      return min + Math.floor(Math.randomIntom() * (max - min + 1));
    };
   console.log(randomInt(20,1));
   console.log(randomInt(1,10));
   console.log(randomInt(6));
   console.log(randomInt());
   