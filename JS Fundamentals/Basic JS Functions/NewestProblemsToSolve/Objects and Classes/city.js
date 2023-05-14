let city = {
    name: 'Sofia',
    area: 492,
    population: 1238438,
    country: 'Bulgaria',
    postCode: 1000
  };
  
  for (let key in city) {
    console.log(`${key} -> ${city[key]}`);
  }

  /*
name -> Sofia
area -> 492
population -> 1238438
country -> Bulgaria
postCode -> 1000

City
▪ Receive	an	object,	which	holds	name,	area,	
population,	country,	and	postcode	
▪ Loop	through	all	the	keys	and	print	them	with	their	
values

Sofia - name -> Sofia
492 - area -> 492
1238438 - population -> 1238438
Bulgaria - country -> Bulgaria
100 - postCode -> 1000

*/

