function arrayValuesSum(input){
             
    if (toString.call(input) !== "[object Array]")
       return false;
         
               var total =  0;
               for(var i=0;i<input.length;i++)
                 {                  
                   if(isNaN(input[i])){
                   continue;
                    }
                     total += Number(input[i]);
                  }
                return total;
               }
   console.log(arrayValuesSum([2,3,4]));
   console.log(arrayValuesSum([100,-200,3]));
   console.log(arrayValuesSum([1,2,'a',3]));