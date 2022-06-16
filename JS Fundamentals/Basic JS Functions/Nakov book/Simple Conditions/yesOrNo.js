function yesOrNo(input) {
    let word1 = input.shift().toLowerCase();
    let word2 = input.shift().toLowerCase();

    if (word1 === word2) {
      console.log('yes');
    } else {
      console.log('no');
    }
  }

  yesOrNo(['asdf', 'ASDF']);
  yesOrNo(['asdf', 'asd']);


  /*

  Problem: Equal Words
Write a function that accepts two words as parameters and checks if they are the same. A comparison should be case-insensitive and the output should be either “yes” or “no”.

Sample Input and Output
Input	Output
Hello
Hello	yes
SoftUni
softuni	yes
Soft
Uni	no
beer
vodka	no
HeLlO
hELLo	yes
Hints and Guidelines
Before the comparison, both words should be in lower case, so that case (uppercase / lowercase) does not influence the result: word = word.toLowerCase().

Testing in The Judge System
Test your solution here: https://judge.softuni.org/Contests/Practice/Index/929#10.

*/