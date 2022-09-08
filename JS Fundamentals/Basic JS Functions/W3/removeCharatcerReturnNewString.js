function removeCharatcerReturnNewString(str, char_pos) 
 {
  part1 = str.substring(0, char_pos);
  part2 = str.substring(char_pos + 1, str.length);
  return (part1 + part2);
 }

console.log(removeCharatcerReturnNewString("Python",0));
console.log(removeCharatcerReturnNewString("Python",3));
console.log(removeCharatcerReturnNewString("Python",5));