function increasingElements(input) {
 
    input.shift(); 
    let countCurrentLongest = 0;
    let countLongest = 0;
    let numPrev = 0;
    let num = 0;
 
    for (let i = 0; i < input.length; i++) {
        num = Number(input[i]); 
 
        if (num > numPrev) {
            countCurrentLongest++;
        } else {
            countCurrentLongest = 1;
        }
 
        if (countCurrentLongest > countLongest) {
            countLongest = countCurrentLongest;
        }
 
        numPrev = num;
    }
    console.log(countLongest);
}