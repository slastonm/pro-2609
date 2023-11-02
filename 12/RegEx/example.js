let strTest = '.CSS';
console.log(`${/^c/i.test(strTest)} c on start`);
console.log(`${/ss$/i.test(strTest)} ss on end`);
// console.log(`${/^[Cc]/.test(strTest)} c on start`);
// console.log(`${/[SSss]$/.test(strTest)} ss on end`);

console.log(`${/^.css$/i.test(strTest)} ss on end`);

let text = 'I know !JS! js Js and Javascript';
console.log(text.match(/\bJS\b/ig));
console.log(text.match(/JS/ig));

let wordPatern = /\b\w+ing\b/g;

let wordText = 'Eating runinga, coding123 working ingeneringtest';

console.log(wordText.match(wordPatern));

let hallowenAnimals = 'How cats, rats, and bats use for hallowen';
let reAnimal = /[crb]ats/g;
console.log(hallowenAnimals.match(reAnimal));

let phoneValid = /^\+38\d{10}$/;
let phoneValieMod = /\+38\(\d{3}\)\d{3}-\d{2}-\d{2}/;
let emailPatern = /^[a-zA-Z0-9.-_]+@[a-zA-Z0-9.-_]+\.[a-zA-Z]{2,4}$/;


