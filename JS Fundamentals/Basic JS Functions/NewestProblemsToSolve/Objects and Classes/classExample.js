//Class Example

class Student {
    constructor(name, grade) {
      this.name = name;
      this.grade = grade;
    }
  }
  
  let	student	=	new	Student('Peter',	5.50);
  console.log(student.name);   // Output: Peter
console.log(student.grade);  // Output: 5.50

student.grade = 4.75;        // Modifying the grade property
console.log(student.grade);  // Output: 4.75


/*
this	keyword	is	used	to	
set	a	property	of	the	
object	to	a	given	value
▪ Creating	a class:
▪ Creating	an	instance	of	the	class:
let	student	=	new	Student('Peter',	5.50);
*/