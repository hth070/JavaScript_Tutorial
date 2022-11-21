
function sumNumbers(args) { // syzadavame funkciq sumNumbers s parametyr args
    let sum = 0;
    for (let i = 1; i < args.length; i++) {
        sum += args[i]; // sum +10
    }
    console.log(sum);
}

sumNumbers([2, 10, 10]); //result 20 // izvikvame funkciq functionname sys stoinost [.....]
sumNumbers([3, -10, -20, -30]); //result -60