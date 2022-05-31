function nthElement (arr) {
    let step = +arr.pop();
    for(let i=0; i < arr.length; i=i+=step) {
        console.log(arr[i]);
    }
}

nthElement (['5',
'20',
'31',
' 4',
'20',
'2']);