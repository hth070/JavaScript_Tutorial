function toyShop(input) {
    let excursionPrice = Number(input[0]);
    let puzzleCount = Number(input[1]);
    let talkingDollCount = Number(input[2]);
    let teddyBearCount = Number(input[3]);
    let minionCount = Number(input[4]);
    let truckCount = Number(input[5]);
    let puzzlePrice = 2.60;
    let talkingDollPrice = 3;
    let teddyBearPrice = 4.10;
    let minionPrice = 8.20;
    let truckPrice = 2;
    let totalCount = puzzleCount + talkingDollCount + teddyBearCount + minionCount + truckCount;
  
    let totalPrice = puzzleCount * puzzlePrice + talkingDollCount * talkingDollPrice + teddyBearCount * teddyBearPrice + minionCount * minionPrice + truckCount * truckPrice;
  
    if (totalCount >= 50) {
      totalPrice *= 0.75;
    }
  
    totalPrice *= 0.9;
  
    if (totalPrice >= excursionPrice) {
      let leftMoney = (totalPrice - excursionPrice).toFixed(2);
      console.log(`Yes! ${leftMoney} lv left.`);
    } else {
      let neededMoney = (excursionPrice - totalPrice).toFixed(2);
      console.log(`Not enough money! ${neededMoney} lv needed.`);
    }
  }
  
toyShop(["40.8", "20", "25", "30", "50", "10"]); // Yes! 418.20 lv left.
toyShop(["320", "8", "2", "5", "5", "1"]); // Not enough money! 238.73 lv needed.
