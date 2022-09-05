function fullNumericYearRepresentation(dt) 
{ 
  return dt.getFullYear(); 
}
dt = new Date(); 
console.log(fullNumericYearRepresentation(dt)); 

dt = new Date(2015, 10, 1); 
console.log(fullNumericYearRepresentation(dt));