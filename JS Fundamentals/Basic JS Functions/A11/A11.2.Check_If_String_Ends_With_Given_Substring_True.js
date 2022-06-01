function endsWith (ourString, partial) {
    if(ourString.endsWith(partial)){
        console.log(true);
    }else {
        console.log(false);
    }
}
endsWith ('This is Houston, we have…', 'We have…');