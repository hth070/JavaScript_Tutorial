function pesonalTitles([arg1, arg2]) {
    let age = Number(arg1);
    let gender = arg2;

    if (age<16) {
        if (gender === "m") {
            console.log("Master");
        } else if (gender === "f") {
            console.log("Miss");
        }
        } else {
            if (gender ==="m") {
                console.log("Mr.");
            } else if (gender === "f") {
                console.log("Ms.");
            }
    }
}

pesonalTitles([10, "m"]);  //// ako e samo f tyrsi ime na promenliva 