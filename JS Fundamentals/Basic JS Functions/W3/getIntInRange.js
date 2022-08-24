var getIntInRange = function(start_num, end_num) 
{
  if (end_num - start_num === 2) 
  {
    return [start_num + 1];
  } 
  else 
  {
    var list = getIntInRange(start_num, end_num - 1);
    list.push(end_num - 1);
    return list;
  }
};

console.log(getIntInRange(2,9));