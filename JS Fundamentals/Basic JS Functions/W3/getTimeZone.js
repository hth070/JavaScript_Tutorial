function getTimeZone(dt) 
{ 
  return /\((.*)\)/.exec(new Date().toString())[1];
}

dt = new Date(); 
console.log(getTimeZone(dt)); 

dt = new Date(1989, 10, 1); 
console.log(getTimeZone(dt));