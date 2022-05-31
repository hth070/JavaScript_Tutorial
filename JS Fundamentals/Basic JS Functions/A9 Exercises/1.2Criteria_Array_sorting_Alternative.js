function sortArray (arr) {
    console.log(arr.
        sort((a, b) =>a.length - b.length || a.localeCompare(b))
        .join('\n'));                                                //printira a posle s join na nov red 
}
                        
sortArray (['alpha',
'beta',
'gamma']
);