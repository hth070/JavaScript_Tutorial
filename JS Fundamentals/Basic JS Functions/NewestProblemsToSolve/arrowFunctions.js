/*
Arrow Functions
▪ Special	shorthand	syntax	for	declaration
▪ They	operate	in	the	context	of	their	enclosing	scope
▪ Useful	in	functional	programming

let	increment	=	x	=>	x	+	1;
console.log(increment(5));		//	6
let	increment	=	function(x)	{ 		return	x	+	1;
}
let	sum	=	(a,	b)	=>	a	+	b;
console.log(sum(5,	6));		//	11*/
let increment = x => x + 1;
console.log(increment(5));    // 6

let increment2 = function(x) {
  return x + 1;
};

let sum = (a, b) => a + b;
console.log(sum(5, 6));    // 11
