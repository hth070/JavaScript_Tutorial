function addAndRemove(commands) {
    let result = [];
    let currentNum = 1;
  
    for (let i = 0; i < commands.length; i++) {
      if (commands[i] === "add") {
        result.push(currentNum);
      } else if (commands[i] === "remove") {
        result.pop();
      }
      currentNum++;
    }
  
    if (result.length === 0) {
      console.log("Empty");
    } else {
      console.log(result.join(" "));
    }
  }
  
  // Example usage:
  addAndRemove(["add", "add", "remove", "add", "add"]);

  /*
  OUTPUT SHOULD BE:
  1 4 5
  */
  