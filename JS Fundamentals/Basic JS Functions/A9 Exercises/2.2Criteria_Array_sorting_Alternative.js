function sortArray (arr) {
    console.log(arr.
        sort((a, b) =>a.length - b.length || a.localeCompare(b))
        .join('\n'));                                                
}
                        
sortArray (['Isacc',
'Theodor',
'Jack',
'Harrison',
'George'
]
);