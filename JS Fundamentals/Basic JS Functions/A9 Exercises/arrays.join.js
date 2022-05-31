/*  

function demo() {
    let nums = [1, 2, 3, 4, 5];
    console.log(nums.join('  ~ '))       //without symbol inside - joins, lists via commas
    nums.push(111);                      //we g get obnoveniq masiv s novata stoinost naj-nakraq //unshift dobavq nai-otpred
    console.log(nums);

}

demo();    





function demo() {
    let nums = [1, 2, 3, 4, 5];   
    nums.pop();                      //removes last element 
    console.log(nums);

}

demo();                            





function demo() {
    let nums = [1, 2, 3, 4, 5];   
    nums.unshift(123);                      //adds 123 infront  //shift maha nai-otpred, slagame samo () skobi
    console.log(nums);

}

demo();       




function demo() {
    let nums = [1, 2, 3, 4, 5];   
    nums.slice(0,3);                      //pri slice - ot koi do koi index; pri splice - ot koi i. kolko elemetna natatyk
    console.log(nums);                    // ot lqvo - vkliuchitelno , otdqsno - nevkliuchitelno  e slice

}

demo();         




function demo() {
    let nums = [1, 2, 3, 4, 5];   
    let ourSplice = nums.splice(0,2,);
    console.log(ourSplice);           

}

demo();         




function demo() {
    let nums = [1, 2, 3, 4, 5];   
    let ourSplice = nums.splice(0,2, 999, 888);
    console.log(nums);           

}

demo();        



function demo() {
    let nums=[1, 2, 3, 4, 5];
    let copyOfNums=[];          // na4in za copy na 1 masiv v drug
    copyOfNums=nums.slice(0);
    console.log(copyOfNums);   //gets same res as nums
}

demo();                          

function demo() {
    let nums=[1, 2, 3, 4, 5];
    let copyOfNums=[].concat(nums);          // drug na4in za copy na 1 masiv v drug

    console.log(copyOfNums);   
}

demo();                      


function demo() {
    let nums = [1, 2, 3, 4, 5];
    let numsSum=nums.reduce((a,b) => a+b);   // reduce za operaciq i vryshtane na 1 stoinost

    console.log(numsSum);
}

demo();




this is a ambda function, and we use it cuz it's easier to write

((a,b) => a + b);     

IS THE SAME AS 
   

Tthis  is how the anonymous function actually looks like:
(function (a,b) {
    return a +b;
});                


function demo() {
    let nums = [1, 2, 3, 4, 5];
    let copyOfNums=[].concat(nums);
    let reversedArr = copyOfNums.reverse();
    console.log(reversedArr);

}

demo();

*/

function demo() {
    let nums = [1, 4, 3, 2, 5];
    console.log(nums.sort((a, b) =>b - a)); // DOES NOT WORK DOES NOT WORK DOES NOT  - ~ 37:00 -- https://www.youtube.com/watch?v=e2UUU_5G5ok
                                             //output should be [5, 4, 3, 2, 1]