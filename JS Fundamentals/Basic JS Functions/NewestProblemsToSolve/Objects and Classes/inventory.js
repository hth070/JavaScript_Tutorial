function createHeroRegister(data) {
    let heroes = [];
  
    for (let i = 0; i < data.length; i++) {
      let [name, level, items] = data[i].split(' / ');
      let hero = {
        name: name,
        level: Number(level),
        items: items.split(', ')
      };
      heroes.push(hero);
    }
  
    heroes.sort((a, b) => a.level - b.level);
  
    for (let hero of heroes) {
      console.log(`Hero: ${hero.name}`);
      console.log(`level => ${hero.level}`);
      console.log(`items => ${hero.items.join(', ')}`);
    }
  }
  
  let heroData = [
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
  ];
  
  createHeroRegister(heroData);
  



/*
Inventory
Create a function, which creates a register for heroes, with their names, level, and items (if they have such). 
The input comes as an array of strings. Each element holds data for a hero, in the following format:
"{heroName} / {heroLevel} / {item1}, {item2}, {item3}..." 
You must store the data about every hero. The name is a string, a level is a number and the items are all strings.
•Inventory
Create a function, which creates a register for heroes, with their names, level, and items (if they have such). 
The input comes as an array of strings. Each element holds data for a hero, in the following format:
"{heroName} / {heroLevel} / {item1}, {item2}, {item3}..." 
You must store the data about every hero. The name is a string, a level is a number and the items are all strings.

Input:
[
'Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara'
]

Output: 
Hero: Hes
level => 1
items => Desolator, Sentinel, Antara
Hero: Derek
level => 12
items => BarrelVest, DestructionSword
Hero: Isacc
level => 25
items => Apple, GravityGun

Input: 
[
'Batman / 2 / Banana, Gun',
'Superman / 18 / Sword',
'Poppy / 28 / Sentinel, Antara'
]

Output:
Hero: Batman
level => 2
items => Banana, Gun
Hero: Superman
level => 18
items => Sword
Hero: Poppy
level => 28
items => Sentinel, Antara
*/