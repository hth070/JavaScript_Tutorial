function palindromes (arr) {
    for (index = 0; index < arr.length; index++) {
    let currentNumber = arr[index];
    let numberToText = currentNumber.toString();
    let reversedText = numberToText.split('').reverse().join('');
    console.log(numberToText, reversedText)
    if(numberToText === reversedText) {
        console.log("true")
    }else{
        console.log("false")
            
        }
    } 
}
palindromes ([123, 323, 421, 121]);