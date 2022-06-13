function yesOrNo(input) {
    let word1 = input.shift().toLowerCase();
    let word2 = input.shift().toLowerCase();

    if (word1 === word2) {
      console.log('yes');
    } else {
      console.log('no');
    }
  }

  //yesOrNo(['asdf', 'ASDF']);
  yesOrNo(['asdf', 'asd'])



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

*/