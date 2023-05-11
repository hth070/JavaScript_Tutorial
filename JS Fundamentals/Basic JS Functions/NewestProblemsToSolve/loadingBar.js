function createLoadingBar(progress) {
    let percentage = progress + '%';
    let barLength = progress / 10;
    let progressBar = '[' + '%'.repeat(barLength) + '.'.repeat(10 - barLength) + ']';
  
    console.log(percentage, progressBar);
  
    if (progress === 100) {
      console.log('100% Complete!');
      console.log('[' + '%'.repeat(10) + ']');
    } else {
      console.log('Still loading...');
    }
  }
  
  // Test cases
  createLoadingBar(30);
  // Output:
  // 30% [%%%.......]
  // Still loading...
  
  createLoadingBar(50);
  // Output:
  // 50% [%%%%%.....]
  // Still loading...
  
  createLoadingBar(100);
  // Output:
  // 100% Complete!
  // [%%%%%%%%%%]
  

/*
•Loading Bar
You will receive a single number between 0 and 100, which is divided with 10 without residue (0, 10, 20, 30...). 
Your task is to create a function that visualizes a loading bar depending on the number you have received in the input.

Examples
Input: 30
Output:
30% [%%%.......]
Still loading...

Input: 50
Output:
50% [%%%%%.....]
Still loading...

Input: 100
Output:
100% Complete!
[%%%%%%%%%%]
*/

