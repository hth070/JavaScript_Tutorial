function readTwoNumbersOutputsGreater ([arg1, arg2]) {
    let num1 = parseInt(arg1);
    let num2 = parseInt(arg2);

    if (arg1 > arg2) {
        console.log("The greater number is" + " " + arg1);
    }
    else {
        console.log("The greater number is" + " " + arg2);
    }
}

readTwoNumbersOutputsGreater ([8, 9]);