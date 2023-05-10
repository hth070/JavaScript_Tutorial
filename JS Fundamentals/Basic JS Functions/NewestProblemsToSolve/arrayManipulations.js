function manipulateArray(input) {
    let arr = input[0].split(' ').map(Number); // parse the initial array
    for (let i = 1; i < input.length; i++) {
      let tokens = input[i].split(' ');
      let command = tokens[0];
      let number = Number(tokens[1]);
      switch(command) {
        case 'Add':
          arr.push(number);
          break;
        case 'Remove':
          arr = arr.filter(x => x !== number);
          break;
        case 'RemoveAt':
          arr.splice(number, 1);
          break;
        case 'Insert':
          arr.splice(number, 0, Number(tokens[2]));
          break;
        default:
          break;
      }
    }
    console.log(arr.join(' ')); // print the final state of the array
  };  
  
  
  manipulateArray(['4 19 2 53 6 43', 'Add 3', 'Remove 2', 'RemoveAt 1', 'Insert 8 3']);
  //manipulateArray(['6 12 2 65 6 42', 'Add 8', 'Remove 12', 'RemoveAt 3', 'Insert 6 2']);

/*
JS ADVANCED ARRAYS
•Array Manipulations
Write a function that manipulates an array of numbers. 
·Add {number}: add a number to the end of the array
·Remove {number}: remove all occurrences of a particular number from the array
·RemoveAt {index}: removes number at a given index
·Insert {number} {index}: inserts a number at a given index
Note: All the indices will be valid!
Print the final state of the array (separated by single space).
The input comes as an array of strings. First element will be a string containing the array to manipulate. Every other command you receive will also be a string.
The output is the manipulated array printed on the console on a single line, separated by space.

Input:	
['4 19 2 53 6 43',
'Add 3',
'Remove 2',
'RemoveAt 1',
'Insert 8 3']	
Output : 4 53 6 8 43 3

Input:
['6 12 2 65 6 42',
'Add 8',
'Remove 12',
'RemoveAt 3',
'Insert 6 2']	|
Otput: 6 2 6 65 42 8
*/