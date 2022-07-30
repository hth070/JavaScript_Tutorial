function dateInString(str)
{
 regexp = /^(1[0-2]|0?[1-9])\/(3[01]|[12][0-9]|0?[1-9])\/(?:[0-9]{2})?[0-9]{2}$/;
  
        if (regexp.test(str))
          {
            return true;
          }
        else
          {
            return false;
          }
}

console.log(dateInString("01/01/2015"));

console.log(dateInString("01/22/2015"));

console.log(dateInString("32/01/2015"));