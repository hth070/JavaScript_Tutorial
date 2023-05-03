function calculateFinalPrice(product, city, quantity) {
    let price = 0;
    
    switch(city) {
      case "Sofia":
        switch(product) {
          case "coffee":
            price = 1;
            break;
          case "water":
            price = 1.2;
            break;
          case "beer":
            price = 2;
            break;
          default:
            console.log("Error: Invalid product");
            return;
        }
        break;
      case "Plovdiv":
        switch(product) {
          case "coffee":
            price = 0.80;
            break;
          case "water":
            price = 1;
            break;
          case "beer":
            price = 1.5;
            break;
          default:
            console.log("Error: Invalid product");
            return;
        }
        break;
      case "Varna":
        switch(product) {
          case "coffee":
            price = 0.60;
            break;
          case "water":
            price = 0.9;
            break;
          case "beer":
            price = 1.2;
            break;
          default:
            console.log("Error: Invalid product");
            return;
        }
        break;
      default:
        console.log("Error: Invalid city");
        return;
    }
    
    const finalPrice = price * quantity;
    console.log(`The final price of ${quantity} ${product}(s) in ${city} is ${finalPrice.toFixed(2)} BGN`);
  }
  
calculateFinalPrice("coffee", "Sofia", 2);  // prints "The final price of 2 coffee(s) in Sofia is 2.00 BGN"
calculateFinalPrice("water", "Plovdiv", 3);   // prints "The final price of 3 water(s) in Plovdiv is 3.00 BGN"
calculateFinalPrice("beer", "Varna", 1);      // prints "The final price of 1 beer(s) in Varna is 1.20 BGN"
calculateFinalPrice("tea", "Burgas", 2);      // prints "Error: Invalid city"
calculateFinalPrice("beer", "Sofia", -1);     // prints "The final price of -1 beer(s) in Sofia is -0.00 BGN"
