function createPerson() {
    let person = {
      firstName: "Peter",
      lastName: "Pan",
      age: 20
    };
    
    return person;
  }
  
  let personObject = createPerson();
  console.log(personObject);
  
  //Output: { firstName: 'Peter', lastName: 'Pan', age: 20 }
