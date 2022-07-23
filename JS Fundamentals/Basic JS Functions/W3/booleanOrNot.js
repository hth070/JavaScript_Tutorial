function bolleanOrNot(value)
        {
        return value === true || value === false || toString.call(value) === '[object Boolean]';
       }

console.log(bolleanOrNot(true));

console.log(bolleanOrNot('bar'));