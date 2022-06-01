function wordInSentence (ourString, wordToCheck) {
    let word=wordToCheck;
    let regex=new RegExp(`\\b${word}\\b`, 'gi');
    if(ourString.match(regex) !==null) {
        console.log(ourString.match(regex).length);
    }else{
        console.log(0);
    }
}

wordInSentence('The waterfall was so high, that the child couldn’t see its peak.','the');


//Cannot read properties of null (reading 'length') when no matches