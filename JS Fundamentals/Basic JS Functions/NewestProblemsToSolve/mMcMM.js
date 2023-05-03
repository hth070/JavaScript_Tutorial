function convertUnits(value, inputUnit, outputUnit) {
    let result = 0;
    
    switch(inputUnit) {
      case "mm":
        result = value / 1000;
        break;
      case "cm":
        result = value / 100;
        break;
      case "m":
        result = value;
        break;
      default:
        console.log("Invalid input unit");
        return;
    }
    
    switch(outputUnit) {
      case "mm":
        result *= 1000;
        break;
      case "cm":
        result *= 100;
        break;
      case "m":
        break;
      default:
        console.log("Invalid output unit");
        return;
    }
    
    console.log(result.toFixed(3));
  }

  
convertUnits(12, "mm", "m");   // извежда "0.012"
convertUnits(150, "m", "cm");  // извежда "15000.000"
convertUnits(45, "cm", "mm");  // извежда "450.000"
