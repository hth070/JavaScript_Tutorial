function nanOrNot(val)
        {
        return val !== val;
       }

console.log(nanOrNot(NaN));

console.log(nanOrNot('bar'));