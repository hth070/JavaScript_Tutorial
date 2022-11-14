function maxNumber(args) {
    let n = args[0];
    let max = Number.NEGATIVE_INFINITY; //answer cannot be lower than -infinity

    for (let i = 1; i <= n; i++) {
        let num = Number(args[i]);

        if (num > max) {
            max = num;
        }
    }

    console.log("max = " + max);
}

//maxNumber([2, 100, 99]);
//maxNumber([3, -10, 20, -30]);
maxNumber([4, 45, 99, -20, 7]);
//maxNumber([1, 999]);
//maxNumber([2, -1, -2]);