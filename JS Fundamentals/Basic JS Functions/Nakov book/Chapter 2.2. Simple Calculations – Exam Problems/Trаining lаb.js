function numberSeats([l, w]) {

    l = Number (l);

    w = Number (w);

 

    let coloumns = Math.trunc (( w * 100 - 100 ) / 70) ;

    let rows = Math.trunc ( l * 100 / 120 );

    let result = Math.trunc ( ( coloumns * rows ) - 3 ) ;

 

    console.log(result);

}