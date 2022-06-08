function calculateSquareArea([arg1]) {
    let a = parseInt(arg1);            
    let area = a * a;
    console.log('Square area = ' + area);
}

calculateSquareArea([3]);

/*The parseInt function converts its first argument to a string, parses that string, 
then returns an integer or NaN . 
If not NaN , the return value will be the integer
 that is the first argument taken as a number in the specified radix */