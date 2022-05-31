let input = [
    ["20", "40"],
    ["10", "60"]
]; 

let sum = 0;

input.forEach((item, index) => {
    sum += +item
    .filter((innerItem, innerIndex) => {
        return innerIndex === index; 
    }), [0];
});

console.log(sum);




