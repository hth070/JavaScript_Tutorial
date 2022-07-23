function errorOrNot(input) {
    return input instanceof Error || toString.call(input) === '[object Error]';
 }
 
 console.log(errorOrNot(new Error('foo')));
 console.log(errorOrNot(6346));
 console.log(errorOrNot('foot'));