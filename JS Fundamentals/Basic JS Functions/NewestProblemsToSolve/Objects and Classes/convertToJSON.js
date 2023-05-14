function convertToJSON(firstName, lastName, hairColor) {
    let person = {
      name: firstName,
      lastName: lastName,
      hairColor: hairColor
    };
    
    let jsonString = JSON.stringify(person);
    console.log(jsonString);
  }
  
  let firstName = 'George';
  let lastName = 'Jones';
  let hairColor = 'Brown';
  
  convertToJSON(firstName, lastName, hairColor);

  

/*Convert to JSON
Write	a	function	that	receives	a	first	name,	last	name,	
hair	color	and	sets	them	to	an	object.
▪ Convert	the	object	to	JSON	string	and	print	it.

Input:       Output:

'George',   {"name":	"George",	"lastName":	
"Jones",	"hairColor":	"Brown"}
'Jones',
'Brown'
*/