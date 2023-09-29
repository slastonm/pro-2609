let thisYear = 2023;

// if(2>3 || thisYear === 2023){
//    console.log(`True`); 
// }
// if(4>3 && thisYear === 2023){
//     console.log(`True &&`); 
//  }
// console.log(`Another work`);

if(thisYear > 2022){
    console.log(`This year > 2022`);
    // thisYear+='1';
    thisYear= thisYear+'1';

    if(thisYear === 2023){
        console.log('Work fine');
    }
    else{
        console.log('Another situation');
    }
}
else{
    console.log(`This year < 2024`);
}

// let userAge = prompt('Type age');
// let userExpirience = prompt('Type value');

// if(Number(userAge)>18 && Number(userExpirience)>1){
//     console.log(`Ваш вік підходить ${Number(userAge)> 18} i ${Number(userExpirience)> 1}`);
// }
// else{
//     console.log(`Нажаль один з параметрів не підходить Ваш вік  ${Number(userAge)> 18} i досвід ${Number(userExpirience)> 1}`);
// } 

// let userData = Number(prompt('Напишіть число'));

// if(userData === 0){
//     console.log(`user dat ${userData}`);
// }
// else if(userData > 1 && userData < 4){
//     console.log(`user data > 1 =  ${userData}`);
// }
// else if(userData > 5){
//     console.log(`user data > 5 =  ${userData}`);
// }
// else{
//     console.log(`user data < 0  =  ${userData}`);
// }

// let booleanValue = false;
let booleanValue = true;


if(!booleanValue){
    // console.log(`True value`);
    console.log(`False value`);

}
else{
    console.log(`True value`);
    // console.log(`False value`);
}

let resultValue = "";
// if(true){
//     resultValue = 'Hello';
// }
// else{
//     resultValue = 'Bye';
// }


resultValue = 2>3 ? 'hello short':'Bye short';

console.log(resultValue);

let firstValue = 13;
let secondValue = 12;

let maxValue = firstValue>secondValue ? firstValue : secondValue;

console.log(`Max valeu ${maxValue}`);
console.log(`Max value > 10 ${firstValue>10 ? firstValue : 'error'}`);

