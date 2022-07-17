function architect(name, projects) {
    let workHours = projects * 3;
    console.log(workHours); 
    console.log(`The architect ${name} will need ${workHours} hours to complete ${projects} projects.`);
    // "The architect {architect's name} will need {hours needed} hour to complete {projects number} project/s."
}
architect("Hristo", 5)




//how many hrs an architect will need to prepare the projects for a few buildings? Single project creation = 3 hrs