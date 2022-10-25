function solve(num){
    let n = parseInt(num);  
    console.log(('*').repeat(n));
    for(let i = 0; i < n-2; i++){
        console.log('*' + ' '.repeat(n-2) + '*');
    }
    console.log(('*').repeat(n));
}
solve([4]);

/*
parseInt funkciq deto vkaravam mstring izkarva chislo
vkaravm "42," izkarva chisloto 42

imam programa koqto user vkarva input v onselect, sled tova se aktiviram az
az trqbva da izkaram all chisla i da napravq operacii
ako v text-a ima bukvi i chisla - izkarvam chislata i pravq operacii

ili greshka ili not a niumber

var let const = we definirane na promenlivi 

===============
"priema input string ili chislo i podava output  chislo zakrygleno kym po - dolnata stoinost " - tova pravi parseInt
*/