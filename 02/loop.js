let i = 0;
let text = "";

while (i < 30){
    text = `Text value is ${i}`;
    // console.log(text);
   
    // if(i === 5){
    //     console.log(`Stop loop i value is ${i}`);
    //     break;
    //     console.log('nooo');
    // }
    
    if(i%2 == 0){
        i++;
        continue;
    }
    console.log(text);
    i++;


}

// while (i < 10) {
//     text = "The number is " + i;
   
//     if (i % 2 == 0){
//         console.log('text');
//         i++;
//         continue;
        
//     }
//     console.log(text);
//     i++;

// }

// console.log(`Text value is 0`);
// console.log(`Text value is 1`);
// ...

let doCounter = 0;

do{
    console.log(`Hello do block ${doCounter}`);
    doCounter++;
}
while(doCounter<5);

for(let i=0; i<10; i++){
    console.log(`Hello from for loop ${i}`);
}