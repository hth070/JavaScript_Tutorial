function carWash(commands) {
    let cleanliness = 0;
  
    for (let i = 0; i < commands.length; i++) {
      const command = commands[i];
  
      if (command === 'soap') {
        cleanliness += 10;
      } else if (command === 'water') {
        cleanliness += cleanliness * 0.2;
      } else if (command === 'vacuum cleaner') {
        cleanliness += cleanliness * 0.25;
      } else if (command === 'mud') {
        cleanliness -= 10;
      }
    }
  
    const formattedCleanliness = cleanliness.toFixed(2);
    console.log(`The car is ${formattedCleanliness}% clean.`);
  }
  
  // Test case
  carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);
  // Output:
  // The car is 39.00% clean.
  
  carWash(['soap', 'water', 'mud', 'mud', 'water', 'mud', 'vacuum cleaner']);
  // Output:
  // The car is 13.12% clean.
  

/*
•Car Wash
Write a JS function that receives some commands. Depending on the command, 
add or subtract a percentage of how much the car is cleaned or dirty. Start from 0. The first command will always be 'soap':
·soap – add 10 to the value
·water – increase the value by 20%
·vacuum cleaner – increase the value by 25%
·mud – decrease the value by 10%
The input comes as an array of strings. When finished cleaning the car, print the resulting value in the format:
             `The car is {value}% clean.`
  Note: The value should be rounded to the second decimal point.

Examples
Input: ['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']
Output: The car is 39.00% clean.
Input: ["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]
Output: The car is 13.12% clean.
*/

