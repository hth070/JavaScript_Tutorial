/*
Simple Calculator
▪ Write	a	function	that	receives	three	parameters	and	calculates	thdepending	on	a	given	operator										
▪ The	operator	can	be	'multiply',	'divide',	'add',	'subtract'	
▪ The	input	comes	as	three	parameters	-	two	numbers	and
an	operator	as	a	string
▪ Bonus	task:	use	arrow	functions	for	the	solution
*/

const calculate = (num1, num2, operator) => {
    switch (operator) {
      case 'multiply':
        return num1 * num2;
      case 'divide':
        return num1 / num2;
      case 'add':
        return num1 + num2;
      case 'subtract':
        return num1 - num2;
      default:
        return 'Invalid operator';
    }
  };
  
  console.log(calculate(5, 3, 'multiply'));   // Output: 15
  console.log(calculate(10, 2, 'divide'));    // Output: 5
  console.log(calculate(4, 7, 'add'));        // Output: 11
  console.log(calculate(8, 2, 'subtract'));   // Output: 6
  console.log(calculate(5, 3, 'power'));      // Output: Invalid operator
  