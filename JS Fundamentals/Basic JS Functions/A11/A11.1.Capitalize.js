function capitalize(input) {
    let inputAsArray=input.split(' ');

    for (let i = 0; i < inputAsArray.length; i++) {
        inputAsArray[i]=inputAsArray[i].toLowerCase();
        inputAsArray[i]=inputAsArray[i].charAt(0).toUpperCase()  //we could leave at up to here $ see result |na charAt na koi index kvo da napravim
        + inputAsArray[i].substring(1); // if substring is 0 - then 'Ccapitalize' ... na substring kazvame ot kyde do kyde da izreje

    }
    let finalResult=inputAsArray.join(' ');   // if whole thing missing - then we get words in [(3) ['Capitalize', 'These', 'Words']]
    console.log(finalResult);                // or check inputAsArray
}
capitalize('Capitalize these words');


//A11 -->42:30