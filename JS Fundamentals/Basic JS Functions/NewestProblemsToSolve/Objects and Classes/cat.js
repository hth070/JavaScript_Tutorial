class Cat {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    meow() {
      console.log(`${this.name}, age ${this.age} says Meow`);
    }
  }
  
  function catCreator(arr) {
    let cats = [];
    for (let i = 0; i < arr.length; i++) {
      let catData = arr[i].split(' ');
      cats.push(new Cat(catData[0], catData[1]));
    }
  
    for (let cat of cats) {
      cat.meow();
    }
  }
  
  let catStrings = ['Mellow 2', 'Tom 5'];
  catCreator(catStrings);
  

  /*
Cat
▪ Write	a	function	that	receives	array	of	strings	in	the	following	format:
'{cat	name}	{age}'
▪ Create	a	class	Cat	that	receives	the	name and	the	age parsed	from	the▪ It	should	also	have	a	method	named	meow()	that	will	print	
"{cat	name},	age	{age}	says	Meow" on	the	console
▪ For	each	of	the	strings	provided	you	must	create	a	cat	object
['Mellow	2','Tom	5'] Mellow,	age	2	says	Meow
Tom,	age	5	says	Meow


 Input:                     Output:
 ['Mellow 2', 'Tom 5']      Mellow, age 2 says Meow
                            Tom, age 5 says Meow
  */