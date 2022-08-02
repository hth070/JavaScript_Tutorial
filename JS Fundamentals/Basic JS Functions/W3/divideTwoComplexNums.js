function divideTwoComplexNums(real, imaginary) {
    this.real = 0;
    this.imaginary = 0;
    this.real = (typeof real === 'undefined') ? this.real : parseFloat(real);
    this.imaginary = (typeof imaginary === 'undefined') ? this.imaginary : parseFloat(imaginary);
  }
  divideTwoComplexNums.transform = function(num) {
    var divideTwoComplexNums;
    divideTwoComplexNums = (num instanceof divideTwoComplexNums) ? num : divideTwoComplexNums;
    divideTwoComplexNums = (typeof num === 'number') ? new divideTwoComplexNums(num, 0) : num;
    return divideTwoComplexNums;
  };
  function display_divideTwoComplexNums(re, im) {
    if(im === '0') return '' + re;
    if(re === 0) return '' + im + 'i';
    if(im < 0) return '' + re + im + 'i';
    return '' + re + '+' + im + 'i';
  }
  function divideTwoComplexNums_num_divide(first, second) {
    var num1, num2;
    num1 = divideTwoComplexNums.transform(first);
    num2 = divideTwoComplexNums.transform(second);
    var denom = num2.imaginary * num2.imaginary + num2.real * num2.real;
  var real = (num1.real * num2.real + num1.imaginary * num2.imaginary) /denom;
  var imaginary = (num2.real * num1.imaginary - num1.real * num2.imaginary) /denom; 
  return display_divideTwoComplexNums(real, imaginary);   
  }
   var a = new divideTwoComplexNums(2, -7);
   var b = new divideTwoComplexNums(4,  3);
  console.log(divideTwoComplexNums_num_divide(a,b));