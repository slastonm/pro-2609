let user = [
    ['Tom', ['html', 'css'], 2],
    ['Tom2', ['html', 'css'], 3]
];

let userObj = {
    userName:'Tom object',
    skills: ['html', 'css'],
    exeperiense: 2,
    info: function(){
        console.log(`Hello my name is ${userObj.userName} I have skills ${userObj.skills} and exp ${userObj.exeperiense}`);
    }
}

console.log(userObj.userName);

userObj.info();

// let todoItem = new Object();
let todoItem = {};
todoItem.value = 'milk';
todoItem.date = new Date();
todoItem.check = false;



console.log(`Buy ${todoItem.value} created ${todoItem.date} status ${todoItem.check}`);


todoItem['testKey'] ='Test valeu';
todoItem.changeStatus = function(){
    todoItem.check = true;
}

todoItem.changeStatus();

console.log(todoItem);

let dog = {
    nickName: 'Rex',
    parents:{
        dad:'Rik',
        mother:'Roxy'
    }
}

let userVarint = 'MyDog';
let brothers = ['Boby', 'Jack'];
dog.nickName = userVarint;
dog.brothersDog = brothers;

delete dog.parents;

// console.log(`Dog info ${dog.nickName} parents: dad name ${dog.parents.dad} mother name ${dog.parents.mother} i have brothers ${dog.brothersDog}`);

console.log(`Dog info ${dog.nickName} parents: dad name i have brothers ${dog.brothersDog}`);
console.log(dog);
