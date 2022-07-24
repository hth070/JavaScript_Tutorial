function numOrNot(value)
        {
        return !isNaN(value) && toString.call(value) === '[object Number]';
       }

console.log(numOrNot(NaN));

console.log(numOrNot(42.32));

console.log(numOrNot(72));