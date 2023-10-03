// let user1 = 'Tom';
// let user2 = 'Bob';
// let user3 = 'Jonh';
// let user4 = 'Mira';

let users = ['Tom', ,'Bob','Jonh','Mira'];
console.log(users);
console.log(users[2]);
console.log(users.length);
if(users.length>2){
    console.log(`Lesson continue`);
}

let secondArray = new Array(10);
console.log(secondArray);
secondArray[0]='First value';
secondArray[5] = 5;
secondArray[secondArray.length-1] = 'Last';
console.log(secondArray);

let price = '45$'
let multiLevelArray = [
    [1,2,3,'a'],
    [4,5,6,'b', 'c'],
    [7,8,9, true, price]
];
console.log(multiLevelArray);

console.log(`First level multiArray ${multiLevelArray[1]} second layer ${multiLevelArray[2][1]}`);

for(let i=0; i<multiLevelArray.length; i++){
    // console.log(i);
    // console.log(`Array value level 1 ${multiLevelArray[i]}`);
    for(let c = 0; c<multiLevelArray[i].length; c++){
        console.log(c);
        console.log(`Level 2 value ${multiLevelArray[i][c]}`);
        // console.log(`Level 2 value ${multiLevelArray[2][4]}`);
    }
}

let constructArray = new Array(4, 5, 'new item', 'next item');
console.log(constructArray);