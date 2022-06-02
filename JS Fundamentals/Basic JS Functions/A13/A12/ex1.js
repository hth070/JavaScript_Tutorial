let person = {
    "firstName": "Pesho",
    age: 18
};

//JSON.stringify(person)

let str = JSON.stringify(person);
let json = JSON.parse(str);

console.log(str);