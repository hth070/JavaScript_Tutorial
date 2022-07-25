function regExpOrNot(value)
        {
       return toString.call(value) === '[object RegExp]';
        }

console.log(regExpOrNot(/test/));

console.log(regExpOrNot('bar'));

console.log(regExpOrNot(72));