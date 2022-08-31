function gmtDifferenceInHours(dt) 
{ 
   return (-dt.getTimezoneOffset() < 0 ? '-' : '+') + (Math.abs(dt.getTimezoneOffset() / 60) < 10 ? '0' : '') + (Math.abs(dt.getTimezoneOffset() / 60)) + '00';
}

dt = new Date(); 
console.log(gmtDifferenceInHours(dt)); 

dt = new Date(1989, 10, 1); 
console.log(gmtDifferenceInHours(dt));