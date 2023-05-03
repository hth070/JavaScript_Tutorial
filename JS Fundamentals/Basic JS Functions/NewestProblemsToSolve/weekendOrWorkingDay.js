function checkDayOfWeek(day) {
    switch(day) {
      case "Monday":
      case "Tuesday":
      case "Wednesday":
      case "Thursday":
      case "Friday":
        console.log("Working Day");
        break;
      case "Saturday":
      case "Sunday":
        console.log("Weekend");
        break;
      default:
        console.log("Error");
        break;
    }
  }

checkDayOfWeek("Monday");     // prints "Working Day"
checkDayOfWeek("Saturday");   // prints "Weekend"
checkDayOfWeek("Test");       // prints "Error"
