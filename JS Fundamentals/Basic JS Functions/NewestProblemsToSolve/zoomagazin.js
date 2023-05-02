function calculateFoodCost(dogFoodCount, catFoodCount) {
    let dogFoodPrice = 2.5; // Price of a pack of dog food in lv
    let catFoodPrice = 4; // Price of a pack of cat food in lv
    let totalDogFoodCost = dogFoodCount * dogFoodPrice;
    let totalCatFoodCost = catFoodCount * catFoodPrice;
    let totalCost = totalDogFoodCost + totalCatFoodCost;
    return `${totalCost.toFixed(2)} lv.`;
  }
  
  // Example usage
  console.log(calculateFoodCost(5, 4)); // Expected output: "28.50 lv."
  console.log(calculateFoodCost(13, 9)); // Expected output: "68.50 lv."
  