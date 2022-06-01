function startsWith (ourString, partial) {
    if(ourString.startsWith(partial)){
        console.log(true);
    }else {
        console.log(false);
    }
}
startsWith ('The quick brown fox…', 'The quick brown fox…');