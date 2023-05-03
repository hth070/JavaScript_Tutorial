function getAnimalClass(animalName) {
    if (animalName === "dog") {
      console.log("mammal");
    } else if (animalName === "crocodile" || animalName === "tortoise" || animalName === "snake") {
      console.log("reptile");
    } else {
      console.log("unknown");
    }
  }

  getAnimalClass("dog");        // извежда "mammal"
  getAnimalClass("tortoise");   // извежда "reptile"
  getAnimalClass("elephant");   // извежда "unknown"
  