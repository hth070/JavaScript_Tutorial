function charOrNot(value)
    {
      if (Object.prototype.toString.call(value) !== '[object String]')
        return false;
    return value && value.length === 1;
    }
 
console.log(charOrNot('f'));
console.log(charOrNot('*'));