function numbers(n) {
    let str = ""; // if 0 instead of empty quot marks - it will sum up all numbers from 1 to 10 resulting in 66, if string - converted to string

    for (let i=1; i<=n; i++) // or could be i<=n.length, we would then treat it as string, and not number or could be +n
        str += i;
    return str;
}
let b = numbers(11);
console.log((b));