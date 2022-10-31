function calculateRectangleArea ([arg1, arg2, arg3, arg4]) {
    let x1 = parseFLoat(arg1); 
    let x2 = parseFLoat(arg2);
    let y1 = parseFLoat(arg3);
    let y2 = parseFLoat(arg4);

    let height = Math.max(y1, y2) - Math.min(y1,y2);
    let width = Math.max(x1,x2) - Math.min(x1, x2);

    console.log(width * height);
    console.log(2*(width + height)); 
}

calculateRectangleArea([60, 20, 10, 50]);

/* SIMPLIFIED VERSION OF ABOVE:
function calculateRectangleArea([x1, y1, x2, y2]) {

    let width = Math.max(x1, x2) - Math.min(x1, x2);
    let height = Math.max(y1, y2) - Math.min(y1, y2);

    console.log(width * height);
    console.log(2 * (width + height));
}
*/