function guessPassword([arg1]) {
    let password = arg1;

    if (password == "s3cr3t!P@ssw0rd") {
        console.log("Welcome");
    } 
    else {
        console.log("Wrong password!");
    }
}

guessPassword(["s3cr3t!P@ssw0rd"]);



/* 


Problem: Password Guess
Write a function that accepts a password (one line of random text) and checks if the input matches the phrase “s3cr3t!P@ssw0rd”. If it matches, print “Welcome”, otherwise print “Wrong password!”.

Sample Input and Output
Input	Output
qwerty	Wrong password!
s3cr3t!P@ssw0rd	Welcome
s3cr3t!p@ss	Wrong password!
Hints and Guidelines
Use an if-else statement.

Testing in The Judge System
Test your solution here: https://judge.softuni.org/Contests/Practice/Index/929#8.

Problem: Number 100...200
Write a function that accepts an integer as a parameter and checks if it is below 100, between 100 and 200, or over 200. Print the appropriate messages as per the examples below.

Sample Input and Output
Input	Output
95	Less than 100
120	Between 100 and 200
210	Greater than 200
Testing in The Judge System
Test your solution here: https://judge.softuni.org/Contests/Practice/Index/929#9.          

*/