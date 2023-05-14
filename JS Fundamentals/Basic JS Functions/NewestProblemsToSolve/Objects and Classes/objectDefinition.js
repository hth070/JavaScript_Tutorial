// We	can	create	an	object	with	an	object	literal
// We	can	define	an	empty	object	and	add properties later

let	person	=	{name:'Toni', age:10, height:163};
let	person1	=	{};
person1.name	='Peter';
person1.age	=	20;
person1.hairColor	=	'black';
person1['lastName']	=	'Parker';

console.log(person);
console.log(person1);