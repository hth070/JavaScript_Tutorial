function containsElementOrNot(arr, element) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            return true;
        }
    }
    return false;
}
arr = [1, 5, 10, 12];
console.log(containsElementOrNot(arr, 5));