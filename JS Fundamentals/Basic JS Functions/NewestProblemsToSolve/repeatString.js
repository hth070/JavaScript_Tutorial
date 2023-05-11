/*
Repeat String
▪ Create	a	function	that	takes	a	string	and	a	number n
and	returns	the	string	repeated	n	times
▪ Return	the	result	as	a	string
Input Output
"abc",	3 abcabc
"Skillo",	2 SkilloSkillo
*/

function repeatString(str, n) {
    let repeatedString = '';
    
    for (let i = 0; i < n; i++) {
      repeatedString += str;
    }
    
    return repeatedString;
  }
  
  console.log(repeatString("abc", 3)); // Output: abcabc
  console.log(repeatString("Skillo", 2)); // Output: SkilloSkillo
  