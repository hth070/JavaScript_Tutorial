function arrayProductValuesCalculation(input){
    if (toString.call(input) !== "[object Array]")
       return false;
     
            var total   =   1;
     
          for(var i=0;i<input.length;i++){
                  if(isNaN(input[i])){
                    continue;
                  }
                   total   *=  Number(input[i]);
               }
             return total;
           }
   console.log(arrayProductValuesCalculation([1,2,3]));
   console.log(arrayProductValuesCalculation([100,-200,3]));
   console.log(arrayProductValuesCalculation([1,2,'a',3]));
   