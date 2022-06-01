function endsWith (ourString, partial) {
    if(ourString.endsWith(partial)){
        console.log(true);
    }else {
        console.log(false);
    }
}
endsWith ('The new iPhone has no headphones jack.', 'o headphones jack.');