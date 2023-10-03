let first = [1,2,3];
let second = [4,5,6];

let result = first.concat(second, 7, 8 , [9, 10]);
console.log(result);

let lowerLetters = ['a', 'b', 'c'];
let lowerLettersStr = lowerLetters.toString();
lowerLettersStr=lowerLettersStr.toUpperCase();
console.log(lowerLettersStr);

for(let i = 0; i<lowerLetters.length; i++){
    if(lowerLetters[i] == 'a'){
        lowerLetters[i] = 'A'
    }
}
console.log(lowerLetters);

let firstLats = ['first',1, 2, 3, 4, 5, 'last'];
firstLats.reverse();
console.log(`Вefore delet ${firstLats}`);
// let todo = [];
// let askUser = prompt('Tye something');
// todo.push(askUser);

// let askUser2 = prompt('Tye something');
// todo.push(askUser2);
// push ( 'Додає значення в кінець массиву')
// console.log(todo);

// for(let i=0; i<todo.length; i++){
//     console.log(`User want buy ${todo[i]}`);
// }

// firstLats.push(1);
// firstLats.push('Test');
// firstLats.push(true);
// firstLats.push([1,2,3]);
// console.log(firstLats);

//pop(Видаляє останній елемент массиву)

firstLats.pop();
console.log(firstLats);
firstLats.pop();
console.log(firstLats);
firstLats.pop();
console.log(firstLats);

firstLats.unshift('NEw value')
console.log(firstLats);
firstLats.unshift('NEw value 1')
console.log(firstLats);

firstLats.shift();
console.log(firstLats);
firstLats.shift();
console.log(firstLats);
firstLats.shift();
console.log(firstLats);
firstLats.push('Fish');
console.log(`Is value Fish in array ${firstLats.includes('Fish')}`);

// let unSortValues = [1,5,3,2,8,11,32];
let unSortValues = ['Cow', 'Cat', 'Rat','Duck','Dog', 'Bird'];

console.log(unSortValues.sort());

let newArray = unSortValues.splice(2,2);

console.log(newArray);
let testNumber = 1;
let testStr = 'Hello';
let testBoolean = true;
console.log(`Is variable array : ${Array.isArray(newArray)}`);
console.log(`Is variable array : ${Array.isArray(testNumber)}`);
console.log(`Is variable array : ${Array.isArray(testBoolean)}`);
console.log(`Is variable array : ${Array.isArray(testStr)}`);



