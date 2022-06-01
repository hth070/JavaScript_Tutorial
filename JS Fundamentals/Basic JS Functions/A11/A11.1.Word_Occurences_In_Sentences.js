function wordInSentence (ourString, wordToCheck) {
    let word=wordToCheck;
    let regex=new RegExp(`\\b${word}\\b`, 'gi');
    if(ourString.match(regex) !==null) {
        console.log(ourString.match(regex).length);
    }else{
        console.log(0);
    }
}

wordInSentence('How do you plan on achieving that? How? How can you even think of that?',
    'how');


//Cannot read properties of null (reading 'length') when no matches