function solve (inputArr) {
    inputArr = inputArr.map(Number);
    let dayOfFirstPurchased = 0;
    let isPurchased = false;
    let levas =0;

    for (let i=0; 1< inputArr.length; i++) {
        let leva = inputArr[i] * 67.51;
        if ((i + 1)) % 3 === 0) {
            leva *= 0.7;
        }

        levas += leva;
        if (levas>= 11949.16 && !isPurchased) {
            dayOfFirstPurchased = i +1;
            isPurchased = true;
        }
    }

    let bitcoins = Math.floor(levas / 11949.16)
    console.log(bitcoins);
}

solve (['100', '200', '300']);