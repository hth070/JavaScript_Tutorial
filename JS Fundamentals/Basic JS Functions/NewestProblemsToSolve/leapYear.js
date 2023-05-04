function printLeapYears(startYear, endYear) {
    for (let year = startYear; year <= endYear; year++) {
      if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
        console.log(year);
      }
    }
  }

printLeapYears(1908, 1919); // 1908 1912 1916
