let data = [
    'Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger |10'
    
];

let dataObj = data
    .map((item) => {
        let townInfo = item.split(" | ");

        return {
            city: townInfo[0],
            product: townInfo[1],
            price: townInfo[2],
        }

});

function hasItem(acc, item) {
    return acc.filter((x)) => {

    }

}

let result = dataObj
    .reduce ((acc, cur) => {
        if (acc[])

        return acc;
    }, {});

Object.keys(result)
.forEach((item) => {
    //Sample Product -> 1000 (Sample Town)
    console.log('${item} -> ${result[item].price} (${result[item].city});


    dataObj
    .reduce ((acc, cur) => {
        if(!acc[cur.product]) {
            acc[cur.product] = cur;

            return acc;
        }
        if(acc[cur.product].price >= cur.price) {
            acc[cur.product] = cur;
        }

        return acc;
    }, {});

    {
        productName: {info},
        productName: {info},
        productName: {info},
        productName: {info},
    }


    console.log(country);