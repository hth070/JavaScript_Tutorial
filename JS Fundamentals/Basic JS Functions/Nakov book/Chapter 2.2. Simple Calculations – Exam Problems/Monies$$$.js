let calculateEuro = function([bitcoinNum, yuanNum, fee]) {
    let result = 0;
    
    const bitcoinPrice = 1168;
    let bitcoinBgn = bitcoinNum * bitcoinPrice;
    let bitcoinInEur = bitcoinBgn / 1.95;
    
    let yuanInEur = yuanNum * 0.15 * 1.76 / 1.95;
    
    
    let feePercentage = fee / 100;
    let feeInEur =  (bitcoinInEur+yuanInEur) * feePercentage;
    
    result = (bitcoinInEur+yuanInEur) - feeInEur;
    
    return result.toFixed(2);
}

console.log(calculateEuro([1, 5, 5]));
