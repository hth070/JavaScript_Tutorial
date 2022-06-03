function  kompot (arr) {
    let peachKg = 0;
    let plumKg = 0;
    let cherryKg = 0;
    let fruitsForRakia = 0; 
    for(let line of arr) {
        let [fruit,kg] = line.split(' ');
        switch(fruit) {
            case "peach":peachKg+=+kg; break;
            case "plum":plumKg+=+kg; break;
            case "cherry":cherryKg+=+kg; break;
            default: fruitsForRakia+=+kg;break;
        }
   
    }

    let cherryKompots = Math.floor(((cherryKg * 1000) / 9) / 25);
    let peachKompots = Math.floor(((peachKg * 1000) / 140) / 2.5);
    let plumKompots = Math.floor(((plumKg * 1000) / 20) / 10);
    let rakiaInLiters = fruitsForRakia * 0.2;

    console.log(`Cherry kompots: ${cherryKompots}`);
    console.log(`Peach kompots: ${peachKompots}`);
    console.log(`Plum kompots: ${plumKompots}`);
    console.log(`Rakia: ${rakiaInLiters.toFixed(2)}`);


}

kompot (['apple 6',
'peach 25.158',
'strawberry 0.200',
'peach 0.1',
'banana 1.55',
'cherry 20.5',
'banana 16.8',
'grapes 205.65',
'watermelon 20.54'

]);