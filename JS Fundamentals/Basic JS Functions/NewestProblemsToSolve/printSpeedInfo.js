function printSpeedInfo(speed) {
    if (speed <= 10) {
      console.log("slow");
    } else if (speed <= 50) {
      console.log("average");
    } else if (speed <= 150) {
      console.log("fast");
    } else if (speed <= 1000) {
      console.log("ultra fast");
    } else {
      console.log("extremely fast");
    }
  }

  printSpeedInfo(8);   // извежда "slow"
printSpeedInfo(47);   // извежда "average"
printSpeedInfo(131);  // извежда "fast"
printSpeedInfo(160);  // извежда "ultra fast"
printSpeedInfo(2000); // извежда "extremely fast"
