function numericMonthRepresentation(dt)
{
  return (dt.getMonth() < 9 ? '0' : '') + (dt.getMonth() + 1); 
}
dt = new Date(); 
console.log(numericMonthRepresentation(dt)); 

dt = new Date(2015, 10, 1); 
console.log(numericMonthRepresentation(dt));