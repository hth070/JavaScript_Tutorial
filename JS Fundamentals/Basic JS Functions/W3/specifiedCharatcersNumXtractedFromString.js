specifiedCharatcersNumXtractedFromString = function (str1, length) {
  
    if ((str1.constructor === String) && (length>0)) {
        return str1.slice(0, length);
    }
};
console.log(specifiedCharatcersNumXtractedFromString("Robin Singh",4));