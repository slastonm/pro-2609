let user = {
    userName: 'Tom',
    userAge: 34,
    userPosition: 'QA'
}

for (let key in user) {
    console.log(`${key} has value ${user[key]}`);
}

// for (let iterator of user) {
//     console.log(iterator);
// }

for (let iterator of ['user', 'test', 'value']) {
    console.log(`For of arr ${iterator}`);
}

let data = ['user', 'test', 'value'];
console.log('Compare');
for(let i =0; i<data.length; i++){
    console.log(`For of arr ${data[i]}`);
}

// arr.forEach(function callback(currentValue, index, array) 

function helloForEach(itemValue, index, arr){
    console.log(`Result ${itemValue}  index value ${index} and arr ${arr}`);
}

data.forEach(helloForEach);

let numberRes = [];
let numbers = [2, 3,5,6, 8,9];
// let numbers = {};
console.log(numbers);

// numbers.forEach((value)=>{
//     numberRes.push(value*2);
// });

console.log(numberRes);


let newRes = numbers.map((value, index, arr)=>{
    return `This value ${value} index value ${index} from arr ${arr}`
});
console.log(newRes);


let newDobleValue = numbers.map((item)=>item*4);
console.log(newDobleValue);

let smile = [':)', '=)',':)', '=)',':)', '=)']; 

function modSmile(value, index, arr){
    if(value == ':)'){
        return arr[index] = 'new';
    }
    else{
        return value;
    }
}


let newSmiles = smile.map(modSmile);

console.log(newSmiles);

let filterNumbers = [0, -2, 3, 5, 7, -4];


function filterFn(value){
    console.log(`value ${value}`);
    if(value>0){
        return value;
    }
}

// let filterValue = filterNumbers.filter((value)=>value>0);
let filterValue = filterNumbers.filter(filterFn);

console.log(filterValue);

let sortNumber = [1, 3, 23, 2, 11];
// sortNumber.sort();
// sortNumber.sort(function(a, b){return a-b});
sortNumber.sort(function(a, b){return a+b});


console.log(sortNumber);



