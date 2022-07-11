let firstArrayElement =  function(array, n) {
    if (array == null) 
    return void 0;
  if (n == null) 
    return array[0];
  if (n < 0)
    return [];
  return array.slice(0, n);
};

console.log(firstArrayElement([8, 9, 0, -2]));
console.log(firstArrayElement([],123));
console.log(firstArrayElement([5, 9, 0, -2],3));
console.log(firstArrayElement([7, 9, 0, -2],6));
console.log(firstArrayElement([7, 9, 0, -2],-3));