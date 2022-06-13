function metricConverter([lenght, inputType, outputType]) {
    lenght = Number(lenght);
    let milimeters = 1000;
    let centimeters = 100;
    let miles = 0.000621371192;
    let inches = 39.3700787;
    let kilometers = 0.001;
    let feet = 3.2808399;
    let yards = 1.0936133;
    let resultInMeters = lenght;
    if (inputType == "mm") {
        result = lenght / milimeters;
    } else if (inputType == "cm") {
        resultInMeters = lenght / centimeters
    } else if (inputType == "mi") {
        resultInMeters = lenght / miles;
    } else if (inputType == "in") {
        resultInMeters = lenght / inches;
    } else if (inputType == "km") {
        resultInMeters = lenght / kilometers;
    } else if (inputType == "ft") {
        resultInMeters = lenght / feet;
    } else if (inputType == "yd") {
        resultInMeters = lenght / yards;
    }
    let resultInOutputType = resultInMeters;
    if (outputType == "mm") {
        resultInOutputType = resultInMeters * milimeters;
    } else if (outputType == "cm") {
        resultInOutputType = resultInMeters * centimeters;
    } else if (outputType == "mi") {
        resultInOutputType = resultInMeters * miles;
    } else if (outputType == "in") {
        resultInOutputType = resultInMeters * inches);
    } else if (outputType == "km") {
        resultInOutputType = resultInMeters * kilometers;
    } else if (outputType == "ft") {
        resultInOutputType = resultInMeters * feet;
    } else if (outputType == "yd") {
        resultInOutputType = resultInMeters * yards;
    }
    console.log(resultInOutputType + " " + outputType);
}