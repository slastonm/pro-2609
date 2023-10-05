// for(let i =0; i<10; i++){
//     hello(i);
// }

// let hello = function (value){
//         console.log(`Hello from function ${value}`);
//     }

function hello (value){
    console.log(`Hello from function ${value}`);
}

let numbers = [1,2,3,4];

function upArrayValue(upValue, arrayValue){
    for(let i =0; i<arrayValue.length; i++){
        arrayValue[i]=arrayValue[i]*upValue;
    }
}

let newNumbers = [2,4,10];
upArrayValue(3, numbers);
console.log(numbers);

upArrayValue(10, newNumbers);
console.log(newNumbers);

// let firstValue = Number(prompt('Type first number'));
// let operation = prompt('Type operation *,/,+,-');
// let secondValue = Number(prompt('Type second number'));

function summ(a,b){
    console.log(`${firstValue} + ${secondValue} = ${firstValue+secondValue}`);
}
function minus(a,b){
    console.log(`${firstValue} - ${secondValue} = ${firstValue-secondValue}`);
}
function divide(a,b){
    if(b == 0){
        console.log('Error second value 0');
    }
    else{
        console.log(`${firstValue} / ${secondValue} = ${firstValue/secondValue}`);
    }
}
function multiply(a,b){
    console.log(`${firstValue} * ${secondValue} = ${firstValue*secondValue}`);
}

// switch (operation) {
//     case '+':
//         summ(firstValue, secondValue);
//         break;
//     case '-':
//         minus(firstValue, secondValue);
//         break;
//     case '*':
//         multiply(firstValue, secondValue);
//         break;
//     case '/':
//         divide(firstValue, secondValue);
//         break;
//     default:
//         console.log('Unknow operation');
//         break;
// }


function retunFn (){
    return 23+2;
    console.log('Hello');
}

function noReturn(){
    console.log(2+2);
}

let resRetrun = retunFn();
let resNoRetrun = noReturn();

// console.log(resRetrun);
// console.log(resNoRetrun);

function defalutFn (a='no information'){
    console.log(`Hello ${a}`);
}   

defalutFn('User');

function manyValues (a, b, c){
    console.log(arguments);
}

function newValues (...args){
    console.log(args);
}

// manyValues('1',2,4, 5, 6,7 );
newValues('1',2,4, 5, 6,7 );

function double(value){
    return value*2;
}
function upTen(value){
    return value*10;
}
let testNumbers = [1,2,3,4,5];
let newArray = [];

function callFnInside (arr, fn){
    for(let i=0; i<arr.length; i++){
        newArray.push(fn(arr[i]));
    }
}

callFnInside (testNumbers, double);

console.log(newArray);

// Arrow functions
let test = function(a){

    let base = a/2;
    return base*22; 
}
console.log(test(5));

let arrowFn = (a)=>{

    let base = a/3;
    return a*33
};

console.log(arrowFn(7));


let global = 'global';

function scopeFn(){
    // let local = 'local';
    let global = 'Hello';
    console.log(global);
}
scopeFn();

console.log(global);
// console.log(local);

function scopeGlobal(){
    // console.log(`inside another fn ${local}`);
    global = global+2;
}
scopeGlobal();
scopeGlobal();
scopeGlobal();


console.log(global);