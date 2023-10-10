// Домашня робота:
// 1)let smile = [':)', '=)',':)', '=)',':)', '=)']; 
// Створити функцію яка отримує аргументом новий самйл та масиив і змінює  в масиві смайл  '':)' на новий смайл і повертає массив смайлів ( виконати з return) 

let smile = [':)', '=)',':)', '=)',':)', '=)']; 

function sortSmile(smileSymbol, arr){
    for(let i=0; i<arr.length; i++){
        if(arr[i]==':)'){
            arr[i] = smileSymbol;
        }
        else{
            continue;
        }
    }
    return smile;
    // console.log(smile);

}

// sortSmile('%)', smile);
console.log(`Function work result ${sortSmile('^_^', smile)}`);




// 2)Створити функцію яка  отримує массив і функцію колбек. Функція обробляє массив обєктів і вираховує площу фігури з даних в обєкті використовуючи колбек. Результатом виконання буде маси з результатами ['Площа  Squar 12' .... ]
// Формула для обчислення площі  A*B
// let figurs = [
//     {
//         figure:"Squar",
//         sizeA: 4,
//         sizeB: 4
//     },
//     {
//         figure:"Rectangle",
//         sizeA: 4,
//         sizeB: 8
//     }
// ]


let figurs = [
    {
        figure:"Squar",
        sizeA: 4,
        sizeB: 4,
        area:function(){
            return this.sizeA*this.sizeB;
        }
    },
    {
        figure:"Rectangle",
        sizeA: 4,
        sizeB: 8
    }
]
let results = [];

let areaCalulculator = function(firstSideSize, secondSideSize){
    return firstSideSize*secondSideSize;
}

let areaCalcFn = function(data, callbackFn){
    for (let i = 0; i < data.length; i++) {

        // console.log(data[i]); // obj
        // console.log(data[i].figure);
        // let figureName = data[i].figure;
        // let sizeA = data[i].sizeA;
        // let sizeB = data[i].sizeB;

        // results.push(`Total area ${data[i].figure} is ${callbackFn(data[i].sizeA, data[i].sizeA)}`);
        // results.push(`Total area ${figureName} is ${callbackFn(sizeA, sizeB)}`);

    }
}

areaCalcFn(figurs, areaCalulculator);

console.log(results);

// 3) Написати функцію яка отримує масив і число ( число відповідає за кількість значень виведених з масива )  якщо число не вказано то вивести 1 значення

let testArr = ['a', 'b', 'c', 3, 4, 5, 6];
let printValue = function(value=1){
    if(testArr.length>0){
        for(let i = 0; i<value; i++){
            console.log(testArr[i]);
        }
    }
};

printValue();
console.log('new');
printValue(2);
console.log('new');
printValue(4);


// 4) let arr = ['First value' , 'test' , 'Last ']
// Написати функцію що отримує значення ( first чи last )  та массив, якщо значення first то видаляє перше значення з масива якщо last видаляє останнє значення

let arr = ['First value' , 'test' , 'Last '];

let getData = function(value, data){
    if(data.length>0){
        return value == 'first' ? data[0] : data[data.length-1];
    }
    else{
        return 'No iformation';
    }
}

console.log(getData('firts', []));
console.log(getData('first', arr));
console.log(getData('last', arr));

