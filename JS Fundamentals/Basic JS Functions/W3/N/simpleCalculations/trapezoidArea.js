function printTrapezoidArea([input1, input2, input3]) {
    let b1 = parseFloat(input1);
    let b2 = parseFloat(input2);
    let h = parseFloat(input3);
    let area = (b1 + b2) * h /2;
    console.log(area); 
}

printTrapezoidArea([4, 6, 2]);