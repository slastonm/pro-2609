//  ==  

// let firstValue = "tom";
// let secondValue ='Tom';
// let firstValue = true;
// let secondValue = true;
// let firstValue = null;
// let secondValue = undefined;
let firstValue = 'true';
let secondValue = true;
console.log(`== str and number ${firstValue == secondValue}`);

//  ===

// let thirdValue = 10;
// let forthValue = '10';
// let thirdValue = null;
// let forthValue = undefined;
let thirdValue = true;
let forthValue = 'true';
console.log(` === ${thirdValue === forthValue}`);

console.log(`!= ${thirdValue != forthValue}`);
console.log(`!= ${5 != '5'}`);
console.log(`!== ${5 !== '5'}`);


let a = 30;
let b = 40;
console.log(`Більше > ${12 > 11}`);
console.log(`Менше < ${12 < 11}`);
console.log(`Менше < ${a < b}`);

console.log(`Більше >= ${10 >= 11}`);
console.log(`Менше <= ${13 <= 12}`);

// Логічне Чи, Или, Or  ||
// true || false = true
// false || true = true
// true || true = true
// false || false = false

// Логічне I, и, and  &&
// true && false = false
// false && true = false
// true && true = true
// false && false = false

let userName = 'Tom';
let userAge = 21;
let userSkill = 'html';

console.log(`Hello user ти нам підходиш за умов ${userName == 'Bob' || userAge >20 || userSkill == 'html'}`);

console.log(`Hello user ти нам підходиш за умов ${userName == 'Tom' && userAge >20 && userSkill == 'html'}`);






