
const products = ['Potatoes', 'Tomatoes', 'Onions', 'Apples'];

// sort the products array in alphabetical order
products.sort();

// loop through the sorted array and print each item with its number
for (let i = 0; i < products.length; i++) {
  console.log(`${i+1}.${products[i]}`);
}


const products2 = ['Watermelon', 'Banana', 'Apples'];

// sort the products array in alphabetical order
products2.sort();

// loop through the sorted array and print each item with its number
for (let i = 0; i < products2.length; i++) {
  console.log(`${i+1}.${products2[i]}`);
}

/*
JS ADVANCED ARRAYS


•List of Products
You will receive an array of products. Print a numbered array of all the products ordered by name.
Example
Input	Output
['Potatoes', 'Tomatoes', 'Onions', 'Apples']	1.Apples
2.Onions
3.Potatoes
4.Tomatoes
['Watermelon', 'Banana', 'Apples']	1.Apples
2.Banana
3.Watermelon

Hints
·The sort function rearranges the array in ascending order
*/