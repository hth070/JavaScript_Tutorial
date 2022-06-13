function dailyEarnings([workDays, moneyPerDay,currencyRate]) {
 
    let monthSalary = workDays * moneyPerDay;
    let yearSalary = (monthSalary *12) + (monthSalary * 2.5); 
    let taxes = yearSalary * 0.25;
    let netSalary = yearSalary - taxes;
    let salaryInLeva = netSalary * currencyRate;
    
    return (salaryInLeva / 365).toFixed(2);
    }

    let result = dailyEarnings([20, 100, 1.82]);
    console.log(result);
