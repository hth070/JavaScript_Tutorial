function smartLili(age, wmPrice, toyPrice) {
    let allMoney = 0;
    let evenAge = Math.round(age / 2);
    let oddAge = age - evenAge;
    for (i = 1; i <= evenAge; i++) {
        allMoney += (10*i-1);
    }
    allMoney = allMoney + oddAge*toyPrice;
    if (allMoney >= wmPrice) {
        console.log(`Yes! ${(allMoney - wmPrice).toFixed(2)}`);
    } else {
        console.log(`No! ${(wmPrice - allMoney).toFixed(2)}`);
}
}

smartLili(10, 100, 5);