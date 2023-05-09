function firstLastKElements(arr) {
    let k = arr.shift();
    console.log(arr.slice(0, k).join(' '));
    console.log(arr.slice(arr.length-k, arr.length).join(' '));
  }
  
  // Example usage:

  
  const arr = [3, 6, 7, 8, 9];
  firstLastKElements(arr);
  // Output:
  // 6 7 8
  // 7 8 9

/*

Problem: First and Last K Numbers
▪ You	are	given	an	array	of	numbers
▪ The	first	element	holds	an	integer	k
▪ All	other	elements	are	from	the	array	that	needs	to	be	processed
▪ Print	the	first	k	and	the	last	k	elements	of	the	array	on	a	new	line	
(space	separated)

3
6
7      -> 6 7 8
8      -> 7 8 9
9

*/