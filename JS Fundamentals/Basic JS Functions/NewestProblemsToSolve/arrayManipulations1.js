function manipulateArray(input) {
    // Parse the initial array from the first input string
    let arr = input[0].split(' ').map(Number);

    // Loop through the rest of the input
    for (let i = 1; i < input.length; i++) {
        // Split each command into its components
        let [command, firstArg, secondArg] = input[i].split(' ');

        // Convert arguments to numbers
        let num = Number(firstArg);
        let index = Number(secondArg);

        // Perform the appropriate action based on the command
        switch (command) {
            case 'Add':
                arr.push(num);
                break;
            case 'Remove':
                arr = arr.filter(element => element !== num);
                break;
            case 'RemoveAt':
                arr.splice(num, 1);
                break;
            case 'Insert':
                arr.splice(index, 0, num);
                break;
        }
    }

    // Return the final state of the array as a string
    return arr.join(' ');
}

// Test the function
//console.log(manipulateArray(['4 19 2 53 6 43', 'Add 3', 'Remove 2', 'RemoveAt 1', 'Insert 8 3']));

console.log(manipulateArray(['6 12 2 65 6 42', 'Add 8', 'Remove 12', 'RemoveAt 3', 'Insert 6 2']));

