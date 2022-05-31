function rotateArray (arr) {
    let rotations = +arr.pop();
    for (let i = 0; i<rotations%arr.length;i++) {
        arr.unshift(arr.pop());
    }
    console.log(arr.join(' '));
}

rotateArray ([1, 2, 3, 4, 84]);


//print out 1 2 3 4 via min number of rotations