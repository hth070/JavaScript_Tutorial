/*  function test() {
    let name='Ivan';
    console.log(`I m ${name}`)
}
test();


//function test() {
    let test;  //let has block scope; we use let
    var test;  // var has functional scope; we do not use var, could break a variable, chance of confusion
    const      // once assigned - cannot be chaged 
}
test ();

function test () {
    for (let i=0; i<0; i++) {
        //to do 
    }
}
test ();

// for in and for of will be use a lot;
// for of = goes throught the values
//for in = minavame po index-i             */

/*  function test() {
    let number = 3.5;
    console.log(typeof number)
    console.log(typeof (number.toFixed(3))); //rounds number to 3rd digit. res is 3.500; toFixed changes our number to string !!NB
}                                            //when we add string n number - it will either be NaN or contcatinated 
                                             // depending on which 1 is 1st n which 2nd 

test();   





function test() {
    let number = 3.5;
    //console.log(typeof number)

    let secondNumber=parseInt(number);   //parseInt cuts number to round
    console.log(secondNumber);
}  

test();    

*/

function rounding(input) {
    let number = +input[0];
    let precision = +input[1];
    }
    
    if (precision > 15) {
        precision = 15;
    }

    console.log(number.toFixed(precision))

rounding(['3.1415926535897932384626433832795', '2']);


