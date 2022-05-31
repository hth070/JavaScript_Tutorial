function nthElement (arr) {
    let step = +arr.pop();
    for(let i=0; i < arr.length; i+=step) {
        console.log(arr[i]);
    }
}

nthElement (['1',
'2', 
'3',
'4',
'5',
'6',
]);