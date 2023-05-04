function calculateArea(shape, ...dimensions) {
    switch (shape) {
      case "square":
        return (parseFloat(dimensions[0]) ** 2).toFixed(3);
      case "rectangle":
        return (parseFloat(dimensions[0]) * parseFloat(dimensions[1])).toFixed(3);
      case "triangle":
        return (parseFloat(dimensions[0]) * parseFloat(dimensions[1]) / 2).toFixed(3);
      default:
        return "Invalid shape!";
    }
  }
  
  // examples for using the function
  console.log(calculateArea("square", "5")); // output: 25.000
  console.log(calculateArea("rectangle", "7", "2.5")); // output: 17.500
  console.log(calculateArea("triangle", "4.5", "20")); // output: 45.000
  