const flip = fn => (first, ...rest) => fn(...rest, first);
let a = { name: 'John Smith' };
let b = {};
const mergeFrom = flip(Object.assign);
let mergePerson = mergeFrom.bind(null, a);
mergePerson(b); // == b
b = {};
console.log(Object.assign(b, a)); 