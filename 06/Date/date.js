let nowDateInfo = new Date();

console.log(nowDateInfo);

let myDate = new Date(2023, 11, 26, 19, 0, 5, 0);

console.log(myDate);

// ShortDate

// let shortDate = new Date(2023, 8, 26, 19);
// let shortDate = new Date(2023, 8, 26);
// let shortDate = new Date(2023, 8);
let shortDate = new Date(2023, 0);

console.log(`Short date info:${shortDate}`);

let dateFormat =  new Date();

console.log(`To ISO format ${dateFormat.toISOString()}`);
console.log(`To DateString format ${dateFormat.toDateString()}`);
console.log(`To UTC format ${dateFormat.toUTCString()}`);

let today = new Date();

console.log(`Day info ${today.getDay()}`);
console.log(`Month info ${today.getMonth()}`);
console.log(`Year info ${today.getFullYear()}`);
console.log(`Hours info ${today.getHours()}`);
console.log(`Minutes info ${today.getMinutes()}`);







