function usernames(input) {
    let catalogue = new Set();
    input.forEach(name => catalogue.add(name));

    let sortedNames=Array.from(catalogue)
        .sort((a,b) => a.length - b.length || a.localeCompare(b));
    console.log(sortedNames.join('\n'));
}

usernames (['Rot',
    'Dean',
    'Iris',
    'Biser',
    'Indie',
    'Isacc',
    'Bounty',
    'Denise',
    'Renard',
    'Enfuego',
    'Benjamin'
]);

// if names in list duplicate - types only 1 