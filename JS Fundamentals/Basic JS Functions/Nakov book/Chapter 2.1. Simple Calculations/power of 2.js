const power_of_2 = n => !!n && (n & (n - 1)) == 0;
console.log(power_of_2(16));
console.log(power_of_2(18));
console.log(power_of_2(256)); 