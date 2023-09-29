// створити 4 змінні з числовими значенями і порахувати їх сумму та вивестив в консоль.лог
let a=3;
let b=4;
let c=5;
let d=1;

let summ = a+b+c+d;
console.log(`Сума всіх чисел = ${summ}`);
console.log(`Сума всіх чисел = ${a+b+c+d}`);

// порахувати середнє арефметичне ціх значень та вивестив в консоль.лог

// let midValue = (a+b+c+d)/4;
let midValue = summ/4;

console.log(`Середнє арефметичне = ${midValue}`);
console.log(`Середнє арефметичне = ${(a+b+c+d)/4}`);


// Створити змінну в якій розмістит розмір знижки будьяке числове число, отримати від користувача ( за допомогою prompt )  кількість товарів і вартість товару,  вивести в консоль сумму товару - знижка

let discount = 50;
let count = prompt('Напишіть кількість товарів');
let price = prompt('Напишіть вартість  товару');
let totalPrice = Number(count)*Number(price);
let discountPrice = totalPrice - (totalPrice*discount)/100;
console.log(`Cума до оплати ${discountPrice}`);


