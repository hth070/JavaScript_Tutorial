/* function printStars (count) {                      //function name: use camelCase for printStars; f-n parameters use camel case
    console.log("*".repeat(3));
}
    printStars(10);                                   //invoke function    




function printName() {
        console.log("Ivancho");
}
    printName();  




    function printName(name) {
        console.log(name);
    }
    printName("Ivancho"); 




    
    printName("Ivancho"); //    aka hoisting when function is called be4 being declared 
    function printName(name) {
        console.log(name);
    }





function sumOfTwoNumbers (firstNumber, secondNumber) {    //if f-n on this row is not named - crash
    let finalSum=function (a, b) {                                 // if not named here - np, it will hold its value in finalsum as var
        return a + b;                                                           //and we'll be able to access if in finalsum
    }                                                                       //firstNumber, secondNumber - parameters again 
        console.log(finalSum(firstNumber, secondNumber));   // or console.log(finalSum); - prints finalSum, when (()) - f-n result as construct/object
}                                                                           // else - function itself
    sumOfTwoNumbers(2,5);                                                //how we call function 2 and 5 are parameters

    

//what is specific about assign a function to a variable - it may not be named, it must remain anonymous
//what is the sepcific thing when we have a finction in a var. It is easier to return a vale than to print it. 
//Diff is when we have a return of a result of a function it goes to the variable (finalSum), and we can access it via finalSum
//When there is print - we get the result directly 



function sumOfTwoNumbers (firstNumber, secondNumber) {  
    let finalSum=function (a, b) {      
        return a + b;         
    }      
    return finalSum(firstNumber, secondNumber)
}              
console.log(sumOfTwoNumbers(2, 5));





function sumOfTwoNumbers (firstNumber, secondNumber) {  
    return finalSum(firstNumber, secondNumber)             //if we wan tto return it b4 having it declared
    let finalSum=function (a, b) {                      // we cannot hoist or call result b4 f-n created
        return a + b;         
    }      
}              
console.log(sumOfTwoNumbers(2, 5));    





sumOfTwoNumbers (2,5);
function sumOfTwoNumbers (firstNumber, secondNumber) {  
    console.log (firstNumber + secondNumber)
}                                                                     */




function sumOfTwoNumbers (firstNumber, secondNumber) {  
    let sumOfNumbers=(a,b)=> a+b;
    console.log(sumOfNumbers(firstNumber, secondNumber));
}
sumOfTwoNumbers(2,5);
