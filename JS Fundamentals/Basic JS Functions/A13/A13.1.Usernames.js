function usernames(input) {
    let catalogue = new Set();
    input.forEach(name => catalogue.add(name));

    let sortedNames=Array.from(catalogue)
        .sort((a,b) => a.length - b.length || a.localeCompare(b));
    console.log(sortedNames.join('\n'));
}

usernames (['Ashton',
    'Kutcher',
    'Ariel',
    'Lilly',
    'Keyden',
    'Aizen',
    'Billy',
    'Braston'
]);

// if names in list duplicate - types only 1 