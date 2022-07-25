function pureJsonObjectOrNot(value)
        {
        return toString.call(value) === '[object Object]';
        }

console.log(pureJsonObjectOrNot({name: 'Robert'}));

console.log(pureJsonObjectOrNot('bar'));

console.log(pureJsonObjectOrNot(72));