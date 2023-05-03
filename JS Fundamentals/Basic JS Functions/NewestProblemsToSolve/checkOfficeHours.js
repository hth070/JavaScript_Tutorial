function checkOfficeHours(hour, dayOfWeek) {
    if (dayOfWeek === "Saturday" || dayOfWeek === "Sunday" || hour < 10 || hour >= 18) {
      console.log("closed");
    } else {
      console.log("open");
    }
  }

  
checkOfficeHours(11, "Monday");   // извежда "open"
checkOfficeHours(19, "Friday");  // извежда "closed"
checkOfficeHours(11, "Sunday");  // извежда "closed"
