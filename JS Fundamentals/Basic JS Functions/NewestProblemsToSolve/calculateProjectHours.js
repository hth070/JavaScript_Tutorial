function calculateProjectHours(name, projects) {
    let totalHours = projects * 3;
    return `The architect ${name} will need ${totalHours} hours to complete ${projects} project/s.`;
  }
  
  console.log(calculateProjectHours("George", 4));
  console.log(calculateProjectHours("Sanya", 9));