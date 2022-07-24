function objectOrNot(value)
        {
        var datatype = typeof value;
        return datatype === 'function' || datatype === 'object' && !!value;
       }

console.log(objectOrNot({name: 'Robert'}));

console.log(objectOrNot('bar'));

console.log(objectOrNot(72));