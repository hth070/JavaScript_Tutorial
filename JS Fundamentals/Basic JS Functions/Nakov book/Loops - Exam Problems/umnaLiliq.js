function cleverLily(input) {
    let years = Number(input[0]);
    let washingMachinePrice = Number(input[1]);
    let pricePerToy = Number(input[2]);
    let tempMoney = 10;
    let yearSavings = 0;
    let toySavings = 0;
    let allSavings = 0;
    for (let i = 1; i <= years; i++) {
      if (i % 2 == 0) {
        yearSavings += tempMoney - 1;
        tempMoney += 10;
      } else {
        toySavings += 1;
      }
    }
    allSavings = yearSavings + toySavings * pricePerToy;
  
    if (allSavings >= washingMachinePrice) {
      console.log(`Yes! ${(allSavings - washingMachinePrice).toFixed(2)}`);
    } else {
      console.log(`No! ${(washingMachinePrice - allSavings).toFixed(2)}`);
    }
  }
  cleverLily(["10", "170.00", "6"]);