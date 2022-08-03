function twentyHammingNums(n) {
    var succession = [1];
    var length = succession.length;
    var candidate = 2;
    while (length < n) {
        if (istwentyHammingNumsNumber(candidate)) {
            succession[length] = candidate;
            length++;
        }
        candidate++;
    }
    return succession;
}
function istwentyHammingNumsNumber(num) {
    while (num % 5 === 0) num /= 5;
    while (num % 3 === 0) num /= 3;
    while (num % 2 === 0) num /= 2;

    return num == 1;
}

console.log(twentyHammingNums(20));