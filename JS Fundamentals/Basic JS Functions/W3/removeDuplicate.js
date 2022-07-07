const filter_Non_Unique = arr => arr.filter(i => arr.indexOf(i) === arr.lastIndexOf(i));

console.log(filter_Non_Unique([7, 2, 9, 7, 3, 4, 9]));  
console.log(filter_Non_Unique([12, 13, 14, 15]));  