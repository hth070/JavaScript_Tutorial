function reverse_some_numbers_here(n)
{
	n = n + "";
	return n.split("").reverse().join("");
}
console.log(Number(reverse_some_numbers_here(654321)));