let a = 16; //First number
let b = 32;  //Second number 
let result;
while (a!=b)
{
	if (a>b)
	{
		a = a -b;
	}
	else
	{
		b = b - a;
	}
}
result = a;
console.log(result);