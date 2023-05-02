function calculatePartyBudget(rent) {
    let cakePrice = rent * 0.2;
    let drinksPrice = cakePrice * 0.55; // 45% discount
    let animatorPrice = rent / 3;
    let totalBudget = rent + cakePrice + drinksPrice + animatorPrice;
    console.log(totalBudget.toFixed(1));
  }
  
  calculatePartyBudget(2250);
  