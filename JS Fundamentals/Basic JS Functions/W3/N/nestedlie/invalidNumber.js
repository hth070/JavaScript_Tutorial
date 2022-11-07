function invalidNumber (arg1) { 

let num = Number(arg1);
let inRange = (num >= 100 && num <= 200 || num === 0);
    
    if (!inRange) {
        console.log("invalid");

    }else {
        console.log("valid")
    }
}

invalidNumber (1);
invalidNumber (100000);
invalidNumber (100);
invalidNumber (200);

