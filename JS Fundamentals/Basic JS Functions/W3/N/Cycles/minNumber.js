function minNumber(args) {
    let n = args[0];
    let min = Number.POSITIVE_INFINITY; //answer cannot be lower than -infinity

    for (let i = 1; i <= n; i++) { // syzadavame cikyl s promenliva i = 1, oito se izpylnqva dokato i<=n i se uvelichava s 1 
        let num = Number(args[i]);
                
        if (num < min) {
            min = num;
        }
    }

    console.log("min = " + min);
}

//minNumber([2, 100, 99]);
minNumber([3, -10, 20, -30]);
//minNumber([4, 45, 99, -20, 7]);
//minNumber([1, 999]);
//minNumber([2, -1, -2]);