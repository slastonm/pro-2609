// Домашня робота:
//   1) Створити функцію конструктор яка створює обєкт юзер (з даними імя, прізвище, вік, email  в функції конструкторі повиний бути метод виводу інформації про юзера,  метод повинен бути винесений в прототип.

// 2) Створіть 5 користувачів помістіть їх в массив, а далі використовуючи цикли розглнуті на уроці пройдуть цей массив і збережіть юзер інфо обєкта ( дані з метода в 1 завданні )  в новому масиві
// 3)Створити функцію сорт яка посортує массив з створеними обєктами юзер по віку ( в порядку зростання)

function CreateUser(userName, userSurname, userAge, userEmail){
    this.userName = userName;
    this.userSurname = userSurname;
    this.userAge = userAge;
    this.userEmail = userEmail;
    // this.userInfo = function(){
    //     console.log(`Global function`);
    // }
}

CreateUser.prototype.userInfo = function(){
    console.log(`This user: ${this.userName} ${this.userSurname} has age: ${this.userAge} contact email ${this.userEmail}`);
}
CreateUser.prototype.getInfo = function(){
    return `This user: ${this.userName} ${this.userSurname} has age: ${this.userAge} contact email ${this.userEmail}`;
}

let userA = new CreateUser('Tom1', 'Don', 30, 'tom@gmail.com');

userA.userInfo();
console.log(userA);

let userB = new CreateUser('Tom2', 'Don', 40, 'tom@gmail.com');
let userC = new CreateUser('Tom3', 'Don', 20, 'tom@gmail.com');
let userD = new CreateUser('Tom4', 'Don', 25, 'tom@gmail.com');
let userE = new CreateUser('Tom5', 'Don', 50, 'tom@gmail.com');

let users = [userA, userB, userC, userD, userE];

// let usersInfoArr = users.map((user)=>{ return user.getInfo()});
let usersInfoArr = users.map((user)=>{ return `Second This user: ${user.userName} ${user.userSurname} has age: ${user.userAge} contact email ${user.userEmail}`});

console.log(usersInfoArr);

let newInfo = [];

for (const user of users) {
    // newInfo.push(`${user.userName}`);
    newInfo.push(`For of ${user.getInfo()}`);
}
console.log(newInfo);

// usersAge = [2,3,5,1];
let sortUsers = users.sort((a, b)=>a.userAge-b.userAge);
// let userAge = usersAge.sort((a, b)=>a-b);

console.log(sortUsers);