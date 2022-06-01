function startsWith (ourString, partial) {
    if(ourString.startsWith(partial)){
        console.log(true);
    }else {
        console.log(false);
    }
}
startsWith ('How have you been?', 'how');