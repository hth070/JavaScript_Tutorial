var lastday = function(y,m){
    return  new Date(y, m +1, 0).getDate();
    }
    console.log(lastday(2015,1));
    console.log(lastday(2016,2));
    console.log(lastday(2017,12)); 