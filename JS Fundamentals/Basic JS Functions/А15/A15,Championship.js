function championship (arr) {
    let book = {};
    for (let element of arr) {
        let tokens=element.split(' -> ');
        let teamName=tokens[0];
        let pilotName=tokens[1];
        let pilotPoints=+tokens[2];

        if(!book.hasOwnProperty(teamName)) {
            book[teamName]={
                totalPoints:0,
                pilots: {}
            };
        }
        if(!book[teamName]["pilots"].hasOwnProperty(pilotName)) {
            book[teamName] ["pilots"][pilotName] = 0;

        }
        book[teamName]["pilots"][pilotName]+=pilotPoints; 
        book[teamName]["totalPoints"]+=pilotPoints; 
    }
let winners=Object.entries(book).sort((a,b) => b[1]["totalPoints"] - a[1]["totalPoints"]).slice(0,3);

    for(let winnersTeam of winners) {
        console.log(`${winnersTeam[0]}: ${winnersTeam[1][totalPoints]}`);
        let sortedPilots=Object.entries(winnersTeam[1][pilots]).sort((a,b) => b[1 - a[1]]);
        for(let pilot of sortedPilots) {
            console.log(`--${pilot[0]} -> ${pilot[1]}`);
        }
    } 

}

championship (["Ferrari -> Kimi Raikonen -> 25",
"Ferrari -> Kimi Raikonen -> 25",
"Ferrari -> Sebastian Vettel -> 18",
"Red Bull -> Max Verstapen -> 6",
"Red Bull -> Daniel Ricciardo -> 5",
"Mercedes -> Lewis Hamilton ->10",
"Mercedes -> Valteri Bottas -> 8",
"Malinka -> Pesho Peshev ->2000",
"Malinka -> Gosho Peshev -> 2"

])