function getCount(str) {
    var vowelsCount = 0;
    const vowels = ['a','e','i','o','u']
    for (let char of str) {
        if (vowels.includes(char)) {
            vowelsCount++
        }
    }
    return vowelsCount
}

getCount("Whereishedog");