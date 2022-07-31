function countVowelsNum(str) {

    return str.match(/[aeiou]/gi).length;
  
  }
  
  console.log(countVowelsNum('The quick brown fox jumps over the lazy dog'));