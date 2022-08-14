function roundsNumToGivenDecimalPlace(n, r) {
    let int = Math.floor(n).toString()
    if (typeof n !== 'number' || typeof r !== 'number') return 'Not a Number'
    if (int[0] == '-' || int[0] == '+') int = int.slice(int[1], int.length)
    return n.toPrecision(int.length + r)
}
console.log(roundsNumToGivenDecimalPlace(12.375,2));
console.log(roundsNumToGivenDecimalPlace(-10.3079499, 3));
console.log(roundsNumToGivenDecimalPlace(10.49999,0));
console.log(roundsNumToGivenDecimalPlace(10.49999,2));