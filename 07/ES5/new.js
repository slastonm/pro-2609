// console.log(startValue);
// var startValue = '5'
// let startValue = '5'

// var x = 10;
// if(true){
//     var x = 1000;
//     console.log(x);
// }
// let x = 10;
// if(true){
//     let x = 1000;
//     console.log(x);
// }
// console.log(x);
// for(var i = 0; i<5; i++){
//     console.log(`Inside for ${i}`);
// }
// for(let i = 0; i<5; i++){
//     console.log(`Inside for ${i}`);
// }
// console.log(`Outside for ${i}`);

const constValue = 'UserName';
// constValue = true;
// constValue = 10;

const userList = ['Max', 'Tom', 'Bob'];

// userList = 'Diana';
console.log(userList);
userList.push('Diana');
console.log(userList);

const symbolOne = Symbol('text');

const symbolSecond = Symbol('text');

console.log(symbolOne);
console.log(symbolSecond);
console.log(symbolOne === symbolSecond);

const cars = ['ford car','volvo car','fiat car'];
// old way
// const ford = cars[0];
// const volvo = cars[1];

// new way
const [ford, volvo, fiat] = cars;

console.log(`Cars info ${ford}, ${volvo} ${fiat}`);

const hero = {
    name:'Batman',
    realName:'Bruce',
    suitColor:'Red'
}

// console.log(`This hero ${hero.name} real name ${hero.realName}`);

// const {name, realName, suitColor = 'black'} = hero;

// console.log(`This hero ${name} real name ${realName} has ${suitColor} suit`);

const heroes = [
    {
        name:'Batman',
        realName:'Bruce',
        suitColor:'Red'
    },
    {
        name:'Batman2',
        realName:'Bruce2',
        suitColor:'Black'
    }
];

for (let {name, realName, suitColor} of heroes) {
    console.log(`This hero ${name} real name ${realName} has ${suitColor} suit`);
}

// const heroName = heroes.map(
//     function({name}){
//         return `This hero name ${name}`;
//     }
// )
const heroName = heroes.map(
    function(value){
        return `This hero name ${value.name}`;
    }
)
console.log(heroName);

