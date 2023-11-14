let myFirstPromise = new Promise(function(resolve, reject){
    console.log('Promise works');
});

let x = 2;
let y = 2;
let myPromise =  new Promise(function(resolve, reject){
    if(y === 0){
        reject(alert('0 is bad value'));
    }
    else{
        let res = x/y;
        resolve(console.log(res));
    }
});

// pending - в процесі роботи
// fulfilled - Успішне завершення промісу
// rejected -  Завершення з помилкою

// then Виконується і повертає значення після виконання fulfilled
let value = 10;
let thenPromise = new Promise(function(resolve, reject){
    if(value>2){
        resolve('Hello');
    }
    else{
        reject('Error in thenPromise');
        throw 'Small value';
    }
});
thenPromise.then(function(valueFromPromise){
    console.log(`Promise value ${valueFromPromise}`);
}).catch(function(err){
    console.log(`Promise catch ${err}`);
});

let tryCatchPromise = new Promise(function(resolve, reject){
    try{
        console.log('Promise works');
        // getSomeFn();
        resolve('All work fine');
    }
    catch(err){
        reject(`Error information ${err}`);
    }
});
tryCatchPromise.then(function(value){
    console.log(`Info ${value}`);
}).catch(function(err){
    console.log(`${err}`);
});

// promise.then(...).then(...).then(...)
let firstP = new Promise(function(resolve){
    resolve('First promise');
});
let secondP = firstP.then(function(value){
    return `${value}+ second promise value`;
});
let thirdP = secondP.then(function(value){
    return `${value} + third promise`;
});

thirdP.then(function(finalValue){
    console.log(finalValue);
});

new Promise (resolve=>resolve('1'))
.then(value=>`${value}+2`)
.then(value=>`${value}+3`)
.then(finalValue=>console.log(finalValue));

