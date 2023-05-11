/*
Return	value	can	be:
▪ Assigned	to	a	variable
▪ Used	in	expression
▪ Passed	to	another	function
let	max	=	getBigger(2,	6);
let	total	=	getPrice()	*	quantity	*	1.20;
multiply(getBigger(1,4),	20)
*/
function getBigger(a, b) {
    return a > b ? a : b;
  }
  
  function getPrice() {
    // Implement the logic to get the price
  }
  
  function multiply(a, b) {
    return a * b;
  }
  
  let max = getBigger(2, 6);
  console.log(max);
  
  let quantity = 10; // Assuming you have a value for quantity
  let total = getPrice() * quantity * 1.20;
  console.log(total);
  
  console.log(multiply(getBigger(1, 4), 20));
  