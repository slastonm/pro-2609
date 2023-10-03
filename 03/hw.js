// Домашня робота:
// - напишіть змінні які питають логін та пароль з prompt  якщо логін admin і пароль 12345 вірні то виводити повідомлення "вітаємо в системі" якщо ні то виводити "Пароль логін не вірні"
// - Спитати в користувача вік, далі використовуючи тернарний оператор ( це скорочений запис іf ) створити змінну яка отримує true якщо вік більше 18  i false якщо менше


// - Отримати від користувача число яке більше 0 і якщо воно більше 100 то порахувати знижку 3% від числа та вивести в консоль якщо більше 3000 то порахувати знижку 5% і якщо більше 10000 то порахувати знижку 7% в усіх інших випадках вивести: "У вас нема знижки до сплати число яке було введене"

// let userName = prompt('Type user name');
// let userPassword = prompt('Type passwork');

// if(userName == 'admin' && userPassword == '12345'){
//     console.log('Вітаємо в системi');
// }
// else{
//     console.log("Пароль логін не вірні");
// }

// let userAge = Number( prompt('Type your age:'));
// let userAge = prompt('Type your age:');
// userAge = Number(userAge);

// let result = userAge >18 ? true : false;
// console.log(result);

let shoppingPrice = Number(prompt('Type total price'));

if(shoppingPrice > 0 && shoppingPrice< 100){
    console.log(`Your sale 3%`);
}
else if (shoppingPrice > 100 && shoppingPrice < 10000){
    console.log(`Your sale 5%`);
}
else if(shoppingPrice > 10000){
    console.log(`Your sale 7%`);
}
else{
    console.log(`У вас нема знижки до сплати ${shoppingPrice}`);
    
}

