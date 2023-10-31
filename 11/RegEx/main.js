let regString = /hi/;
let digitPatern = /\d\d\d/g;

let paternReg = new RegExp('Hello');
let digitReg = new RegExp('\d\d');

let text = 'Hello 123 user 4a56 and 789 ';
let firstIndex  = text.search(digitPatern);
console.log(firstIndex);

let replaceText = text.replace(digitPatern, '!!!');
console.log(replaceText);

let paterArr = text.match(digitPatern);
console.log(paterArr);
let operationValue = '7+3=10';
let operationNumbers = operationValue.match(/\d/g);
console.log(operationNumbers);

let dialog = 'Are you ok? Yes, Im OK';
let okResult = dialog.match(/ok/gi);

console.log(okResult);

let replaceOk = dialog.replace(/ok/gi, 'fine');
console.log(replaceOk);

let textTosplit = 'Test-123 code-321 value-435';
// let splitArr = textTosplit.split(' ');
let splitArr = textTosplit.split(/-\d\d\d/g);
console.log(splitArr);

let patern = /hello/gi;

let testText = 'Good day world hello hello ';

console.log(`Is text contain hello ${patern.test(testText)}`);

console.log(`Exec example ${patern.exec(testText)}`);


