/*
If the number is up to 100 inclusive, the bonus points are 5.
If the number is larger than 100, the bonus points are 20% of the number.
If the number is larger than 1000, the bonus points are 10% of the number.
Additional points are awarded as below (added separately from the described above):
For even numbers -> + 1 p.
For numbers, ending with 5 -> + 2 p.

*/
function bonusPoints([num]) {
    let addPoints = 0;
    if (num % 2 === 0) {
        addPoints = 1;
    }
    else if (num % 5 === 0) {
        addPoints = 2;
    }
    
    let num1=  parseInt(num);
    if (num <= 100) {
        let bonus = addPoints + 5;
        return [bonus, bonus + num1];
    }
    
    if (num < 1000) {
        
        let bonus = num1 * 0.2 + addPoints;
        return [bonus, bonus + num1];
    }
    
    let bonus = num1 * 0.1 + addPoints;
    return [bonus, bonus + num1];
    
}

var result = bonusPoints([1000]);
console.log(result[0]);
console.log(result[1]);