function timezoneOffsetInSecs(dt) 
{ 
   return -dt.getTimezoneOffset() * 60;
}

dt = new Date(); 
console.log(timezoneOffsetInSecs(dt)); 

dt = new Date(1989, 10, 1); 
console.log(timezoneOffsetInSecs(dt));