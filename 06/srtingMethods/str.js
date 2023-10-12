let stringValue = 'Hello Hello string ';
console.log(stringValue);
console.log(stringValue.length);
console.log(stringValue[0]);
console.log(stringValue[1]);

let newStr = stringValue.replace('Hello','JS');
console.log(newStr);
console.log(stringValue);

let upperText = stringValue.toUpperCase();
console.log(upperText);

let userValue = '  ВіВтороК    ';
let smallText = userValue.toLowerCase();
console.log(smallText);
// userValue = userValue.trimStart();
// userValue = userValue.trimEnd();
userValue = userValue.trim();
console.log(`Compare ${userValue == 'ВіВтороК'}`);

let textValue ='Text Substring hello Text';

// let subStringValue = textValue.substring(4, 13);
let subStringValue = textValue.substring(4);


console.log(`Substr: ${subStringValue} and ${textValue}`);


console.log(`Index info ${textValue.indexOf('Substring')}`);



