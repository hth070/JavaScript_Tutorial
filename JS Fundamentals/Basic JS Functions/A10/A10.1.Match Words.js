function matchWords (text) {
    let words=text.match(/\w+/g);     // \w+ taken from regex101 & g (the global flag)
    console.log(words.join('|'));
} 

matchWords('A Regular Expression needs to have the global flag in order to match all occurences in the text');