function matchWords (text) {
    let words=text.match(/\w+/g);     // \w+ taken from regex101 & g (the global flag)
    console.log(words.join('|'));
} 

matchWords('_(Underscores) are also word charaacters');


//word snapshot available in word file JAVASCRIPT as problem