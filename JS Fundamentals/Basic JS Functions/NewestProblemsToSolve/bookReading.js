function calculateReadingHours(pages, pagesPerHour, days) {
    const totalReadingTime = pages / pagesPerHour;
    const hoursPerDay = totalReadingTime / days;
    console.log(hoursPerDay.toFixed(1));
  }
  
  calculateReadingHours(212, 20, 2);
  calculateReadingHours(432, 15, 4);
  