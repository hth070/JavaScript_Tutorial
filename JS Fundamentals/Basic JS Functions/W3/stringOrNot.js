stringOrNot = function(input) {
    if (Object.prototype.toString.call(input) === '[object String]')
      return true;
    else
      return false;   
      };
  console.log(stringOrNot('w3resource'));
  console.log(stringOrNot([1, 2, 4, 0]));