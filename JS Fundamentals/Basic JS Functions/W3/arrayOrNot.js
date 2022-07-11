let arrayOrNot = function(input) {
    if (toString.call(input) === "[object Array]")
      return true;
    return false;   
      };
  console.log(arrayOrNot('wwwsite'));
  console.log(arrayOrNot([2, 3, 4, 0]));