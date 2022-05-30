var pesho; 
console.log(pesho);
var pesho = 10;   // hoisting happens , al variables declared anywhere in scope (cloud where vars exist) declaration goes at bottom of scope

function gosho() {
    console.log(pesho);
    if(true) {
        var pesho = 10;
    }
    console.log(pesho);      // var uses function scope, vaariable exists in the sphere that the declaration of our function does
}

// In C# and Java existence of a variable is inbetween {}. not in JS though. Unless we use let - where we use block scope

function pesho() {
    let name= "Pesho";
    debugger;
    let name ="Pesho";
    if (name) {
        //name access
        let age=18;
    }
    function gosho() {
        //name access
        function stamat() {
            //name access
            //age access
            console.log(age);
            let city = "Sofia";
        }
    }
}

//JS allows us to declare a var without any key word before that, to assign a value to it
// it automatically enters avariable in global scope, i.e. var will be accessible from any other point of our product which is bad
// so when we decalre variables - let or const