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
    
    if(i == 4){
        continue;
    }
    console.log(text);
    i++;


}

// console.log(`Text value is 0`);
// console.log(`Text value is 1`);
// ...
