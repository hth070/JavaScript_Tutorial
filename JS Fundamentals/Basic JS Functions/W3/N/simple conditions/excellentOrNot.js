function excellentOrNot(n) {
    let grade = parseFloat(n);

    if (grade >= 5.50) {
        console.log("Excellent!");
        } else { 
            console.log("Not excellent.");
    }
}

excellentOrNot([5.51]);
excellentOrNot(5.49);
excellentOrNot(5.75);