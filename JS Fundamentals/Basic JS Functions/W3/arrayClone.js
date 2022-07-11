let cloneOfArray = function(arra1) {
    return arra1.slice(0);
       };
   console.log(cloneOfArray([7, 8, 9, 0]));
   console.log(cloneOfArray([7, 8, [9, 0]]));


   /*
output: 
[ 7, 8, 9, 0 ]
[ 7, 8, [ 9, 0 ] ]
   */