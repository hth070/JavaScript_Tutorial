function differenceInMinutes(dt2, dt1) 
 {

  var diff =(dt2.getTime() - dt1.getTime()) / 1000;
  diff /= 60;
  return Math.abs(Math.round(diff));
  
 }

dt1 = new Date(2014,10,2);
dt2 = new Date(2014,10,4);
console.log(differenceInMinutes(dt1, dt2));