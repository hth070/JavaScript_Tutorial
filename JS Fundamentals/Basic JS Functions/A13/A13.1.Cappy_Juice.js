function juice(input) {
    let quantities= {};
    let bottles = {};

    for (let line of input) {
        let tokens=line.split(" => ");
        
        let fruit = tokens[0];
        let quantity = +tokens[1];
        if (!quantities.hasOwnProperty(fruit)) {
            quantities[fruit] = 0;
        }
        quantities[fruit] +=quantity;

        if(quantities[fruit] >= 1000) {
            bottles[fruit]=parseInt(quantities[fruit]/1000);            //console.log(bottles[fruit]=quantities[fruits]/1000);
        }
    }
        for(let key of Object.keys(bottles)) {
    console.log(`${key} =>${bottles[key]}`);
    }
}

juice (['Orange => 2000',
        'Peach => 1432',
        'Banana => 450',
        'Peach => 600',
        'Strawberry => 549']
);