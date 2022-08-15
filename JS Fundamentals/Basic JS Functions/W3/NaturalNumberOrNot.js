function NaturalNumberOrNot(n) 
      {
	   if (typeof n !== 'number') 
	        return 'Not a number'; 
			
	 return (n >= 0.0) && (Math.floor(n) === n) && n !== Infinity;
	    }
console.log(NaturalNumberOrNot(-15));
console.log(NaturalNumberOrNot(1));console.log(NaturalNumberOrNot(10.22));
console.log(NaturalNumberOrNot(10/0));
