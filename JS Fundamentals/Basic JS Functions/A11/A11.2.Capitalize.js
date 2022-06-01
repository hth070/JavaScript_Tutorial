function capitalize(input) {
    let inputAsArray=input.split(' ');

    for (let i = 0; i < inputAsArray.length; i++) {
        inputAsArray[i]=inputAsArray[i].toLowerCase();
        inputAsArray[i]=inputAsArray[i]
        .charAt(0)
        .toUpperCase()
        .concat(inputAsArray[i].substring(1));  
        + inputAsArray[i].substring(1); 

    }
    let finalResult=inputAsArray.join(' ');  
    console.log(finalResult);                
}
capitalize('Was that Easy? tRY thIs onE for SiZe!');


//A11 -->42:30