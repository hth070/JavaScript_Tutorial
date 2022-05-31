/* function test(a,b) {
    console.log(typeof a);
    console.log(typeof b);
    console.log(a===b);       // use ==== always irrespective if only strings or whatever
    {
        "age": 18,
        "favouriteNumber": "18"
    }
    obj.age++
}

test('2', 2);
obj.favouriteNumber+1
console.log(obj.age)

//obekt???

*/

function test(a,b) {

    let obj={
        "age": 18,
        "favouriteNumber": "18"
    }

    obj.age++
    obj.favouriteNumber+="1"
    console.log(obj.favouriteNumber)
}