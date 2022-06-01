function findVar (input) {
    let regex=/\b_[a-zA-Z0-9]+\b/g;
    let matchedElements=input.match(regex);
    let finalResult = [];
    for (let i=0; i< matchedElements.length; i++) {
        finalResult.push(matchedElements[i].substring(1));
    }

    console.log(finalResult.join());
}

findVar('The _id and _age variables are both integers.');


// 2 options to do it: match & exec & match is easier 
// from 53- 54:00 
//done while checking regex101 website