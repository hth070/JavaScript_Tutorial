function dna (inp) {
    let entries = {};
    let pattern = /([a-z!@#$?]+)=([\d]+)--([\d])<<([a-z]+)/gm;

    for (let line of inp) {
        if(line==="Stop!") {
            break;
        }
        let matches= line.match(pattern);
       
        if (matches) {
            let name=matches[1].replace(/([^a-z]+)/gi,'');

            if(name.length== matches[2]) {

                if (!entries.hasOwnProperty(matches[4])) {
                    entries[matches[4]] = +matches[3];
                }
                else {
                    entries[matches[4]] += +matches[3];
                }
            }
            
        }
    }
}
let sorted=[];

for(let e in entries) {
    sorted.push([e, entries[e]]);

}
sorted.sort((a,b)=>{
    return b[1] - a[1]
});
sorted.forEach(x=>console.log(`${x[0]} has genome size of ${x[1]}`));




dna (["!@ab?si?di!a@=7--152<<human",
"b!etu?1a@=6--321<<dog",
"!curtob@acter##ium$=14--230<<dog",
"!some@thin@g##=9<<human",
"Stop!"
]);

//if regex does not match anything with our text = we get null