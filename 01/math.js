let firtValue = 6;
let secondValue = 3;
let reslut = firtValue+secondValue;
console.log(reslut);
console.log(secondValue - firtValue);
console.log(firtValue*secondValue);
console.log(secondValue/firtValue);
console.log(secondValue/secondValue);
console.log(firtValue/secondValue);

// Оператор залишку

console.log(firtValue%5);
// secondValue = 3 + 1;

//  secondValue = secondValue + 1;
 secondValue +=3;
 secondValue +=3;
 // += , -=, *=, /=
 console.log('Short operatinon', secondValue);

 let mathRes = ((3+3)*(3+3))/9;
 console.log(mathRes);
 let stringDescription = 'Operation result ='+' '+mathRes+' '+'end';
 console.log(stringDescription);

let templateLiteral =`Text string ${mathRes} or math operation ${firtValue%5}  or show result ${stringDescription}`;
console.log(templateLiteral);

let price = prompt('Вкажіть ціну');
let amount = prompt('Вкажіть кількість');
let priceNumber = Number(price);
let amountNumber = Number(amount);


// let buyResult = `Сума покупки ${Number(price)* Number(amount)}`;
// let buyResult = `Сума покупки ${priceNumber*amountNumber}`;
let buyResult = `Сума покупки ${price*amount}`;


console.log(buyResult);