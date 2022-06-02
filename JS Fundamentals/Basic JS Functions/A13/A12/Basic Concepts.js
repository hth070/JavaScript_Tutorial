/*

let person = []; // syzdavame obekt i masiv
person.push();   // adding element to an array 
pop              //  removing element from the end of an array
unshift          // adding element at the start
shift             // mahame element nai-otpred



[] = //deklarirame Array
{}  = //deklarirame Object
let person {} = //prazen obekt 
let persion = ["1",true] = //masivite mogat da sydyrjat vsichko, koeto si iskaмe 





let person = {
    name: "pesho",
    age: 18
                           
};                         



person.name = undefined; // prisvoqva stoinost undefined cuz undefined = primitive type, = null e po-raviliniq nachin

 console.log(person.name);                        
                                           
                                            




/*console.log(person[name]);                 

let name = "address"; // ako stringa v koito e kliucha e v promenliva polzvame [] da rabptim s ys stringove, na koito ne znaem
                     // right name

/* person.name ="Sofia";                        //dobavqne na new properties after its creation , changed name here 
                        // s . dostypvme vsichki kliuchive, properties  and create them too


delete person.name;   // taka se mahat proertyta, no ne se polzva, zashtoto e mn bavno
                    // vmesto tova pravim new object: FILTER, MAP, REDUCE ostavqme obekta samo s properties we need

person.city = "Sofia";   // dobavq kym obekta property city i slaga stoinost Sofia 
person["address"] = "Mladost";    //we can adda key with [ ]  and string        

person[name] = "Mladost";



console.log(person);     // trqbva da e tuk, sled kato sme deklarirali above, inache - ne gi izkarva 






let person = {
    name: "pesho",
    age: 18
                           
};           

//deklarirame ili inicializirame obket person, koito ima kliuch name i stoinost pesho
  // kogato iskame poveche ot 1 property gi razdelqme sys zapetaq; kliuchovete always sa stringove, zatova moje i "name"
   //kak dostypvame pishem imeto na promenlivata, na koqto sme assgnnnali nashiq obekt console.log(person.name); 
    // sled tova s . imame dostyp do propertitata ot 1-vo nivo (name, age)
    //prints out  pesho

 //  console.log(person.name); = dr nachina za dostypvane na property, kakto indexirame i masivi, no tuk
                                            //pishem property, koeto iskame da dostypim kato string 
                                            //shte otyrsi variable name, nqma da nameri i shte grymne
                                            //shte opitam name da zamesti sys string rep-ion of the value we have 

                            //shte dostypi i age i shte izkara 18          */


let person = {
    "firstName": "Pesho",
    age:18
};

let keys = Object.keys(person);

/* person.firstName = null; */

let values = Object.values(person);

person.firstName = 0;

console.log(person.hasOwnProperty("firstName"));

console.log(person[keys[0]]);

console.log(person.firstName);

console.log(person);

// izvejda Pesho, zashtoto dostypvame stringa name i izvikvame na person kliucha name 