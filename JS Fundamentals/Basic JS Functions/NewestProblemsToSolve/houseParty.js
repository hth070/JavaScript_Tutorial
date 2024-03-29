function houseParty(input) {
    let guests = [];

    for (let command of input) {
        let parts = command.split(' ');
        let name = parts[0];
        let action = parts[2];

        if (action === 'going!') {
            if (guests.includes(name)) {
                console.log(`${name} is already in the list!`);
            } else {
                guests.push(name);
            }
        } else if (action === 'not') {
            if (!guests.includes(name)) {
                console.log(`${name} is not in the list!`);
            } else {
                guests = guests.filter(guest => guest !== name);
            }
        }
    }

    for (let guest of guests) {
        console.log(guest);
    }
}

// Test the function
houseParty(['Allie is going!', 'George is going!', 'John is not going!', 'George is not going!']);
houseParty(['Tom is going!', 'Annie is going!', 'Tom is going!', 'Garry is going!', 'Jerry is going!']);


/*
•House Party
Write a function that keeps track of guests that are going to a house party.
You will be given an array of strings. Each string will be one of the following:
-"{name} is going!"
-"{name} is not going!"
If you receive the first type of input, you have to add the person if he/she is not in the list (If he/she is in the list print: "{name} is already in the list!").
If you receive the second type of input, you have to remove the person if he/she is in the list (if not print: "{name} is not in the list!"). 
At the end print all the guests each on a separate line.

Examples
Input	
['Allie is going!',
'George is going!',
'John is not going!',
'George is not going!']	

Output: John is not in the list!
        Allie

 Input:       
['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']	

Output : 
Tom is already in the list!
Tom
Annie
Garry
Jerry
*/