//▪ Functions	within	a	JavaScript	object	are	called methods
//We	can	define	methods	using	several	syntaxes:
//We	can	add	a	method	to	an	already	defined	object
/*
let	person1	=	{
		sayHello:	function()	{
					console.log('Hi,	guys');
		}
}
let	person2	=	{
		sayHello()	{
					console.log('Hi,	guys');
		}
}
let	person3	=	{	name:'Peter',	age:	20	};
person1.sayHello	=	()	=>	console.log('Hi,	guys');
*/

let person1 = {
    sayHello: function () {
      console.log('Hi, guys1');
    }
  };
  
  let person2 = {
    sayHello() {
      console.log('Hi, guys2');
    }
  };
  
  let person3 = { name: 'Peter', age: 20 };
  
  person3.sayHello = function () {
    console.log('Hi, guys3');
  };
  
  person1.sayHello();
  person2.sayHello();
  person3.sayHello();
