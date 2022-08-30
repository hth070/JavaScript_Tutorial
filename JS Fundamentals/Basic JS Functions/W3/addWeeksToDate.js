function addWeeksToDate(dt, n) 
 {
 return new Date(dt.setDate(dt.getDate() + (n * 7)));      
 }

dt = new Date();
console.log(addWeeksToDate(dt, 10).toString());  

dt = new Date(2014,10,2);
console.log(addWeeksToDate(dt, 10).toString());