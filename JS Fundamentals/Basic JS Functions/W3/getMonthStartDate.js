function getMonthStartDate(date)
  {
     
   return new Date(date.getFullYear(), date.getMonth(), 1);
 
  }

dt = new Date(); 

console.log(getMonthStartDate(dt).toString());