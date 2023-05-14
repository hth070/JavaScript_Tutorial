function convertJSONToObject(jsonString) {
    let obj = JSON.parse(jsonString);
    return obj;
  }
  
  let jsonString = '{"name": "George", "age": 40, "town": "Sofia"}';
  let obj = convertJSONToObject(jsonString);
  
  for (let [key, value] of Object.entries(obj)) {
    console.log(`${key}: ${value}`);
  }

/*
name: George
age: 40
town: Sofia

Convert to Object
▪ Write	a	function,	that	receives	a	string	in	JSON	format	and	
converts	it	to	object
▪ Print	the	entries	of	the	object

'{ 
    "name": Geroge,       -> name: George
    "age": 40,               age: 40
    "town": "Sofia"          town: Sofia 
}'
*/