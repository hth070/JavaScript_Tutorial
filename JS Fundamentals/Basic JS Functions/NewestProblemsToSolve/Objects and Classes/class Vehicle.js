class Vehicle {
    constructor(type, model, parts, fuel) {
      this.type = type;
      this.model = model;
      this.parts = parts;
      this.fuel = fuel;
      this.parts.quality = parts.engine * parts.power;
    }
  
    drive(fuelLoss) {
      this.fuel -= fuelLoss;
    }
  }

let parts1 = { engine: 6, power: 100 };
let vehicle1 = new Vehicle('a', 'b', parts1, 200);
vehicle1.drive(100);
console.log(vehicle1.fuel); // Output: 100
console.log(vehicle1.parts.quality); // Output: 600

let parts2 = { engine: 9, power: 500 };
let vehicle2 = new Vehicle('l', 'k', parts2, 840);
vehicle2.drive(20);
console.log(vehicle2.fuel); // Output: 820



/*
•Class Vehicle
Create a class with the name Vehicle that has the following properties:
·type – a string
·model – a string
·parts – an object that contains:
oengine – number (quality of the engine)
opower – number

oquality – engine * power
·fuel – a number
·drive – a function that receives fuel loss and decreases the fuel of the vehicle by that number
The constructor should receive the type, the model, the parts as an object, and the fuel
In judge post your class (Note: all names should be as described)

Example
Test your Vehicle class.

Input: 
*/