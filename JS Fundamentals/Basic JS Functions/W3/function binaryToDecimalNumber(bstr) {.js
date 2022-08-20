function binaryToDecimalNumber(bstr) { 
    return parseInt((bstr + '')
    .replace(/[^01]/gi, ''), 2);
}
console.log(binaryToDecimalNumber('110011'));
console.log(binaryToDecimalNumber('100'));