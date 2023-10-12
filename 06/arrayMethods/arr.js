let filterNumbers = [20,4, 70, 8,9,30];

let greateNumbers = filterNumbers.filter((number)=>{
    if(number>10){
        return true;
    }
    else{
        return false;
    }
});

console.log(greateNumbers);
console.log(filterNumbers);

let randomValue = [1,3,3,4];
let fillArr = randomValue.fill('Test');

console.log(randomValue);

fillArr.fill(0, 1,4);
console.log(fillArr);


let textArr = ['a', 'b', 'c','d','e'];
let joinValue = textArr.join("-");
// let joinValue = textArr.join(" ");
// let joinValue = textArr.join();


console.log(joinValue);

// let splitValue = joinValue.split(',');
let splitValue = joinValue.split('-');



// slice повертає копію частини массиву
let sliceValue = splitValue.slice(2);
console.log(sliceValue);
console.log(splitValue);

// splice видаляє і замінює

let numberValue = [1,3,4,5,6,7];

let spliceValue = numberValue.splice(1, 2);
console.log(spliceValue);
console.log(numberValue);
