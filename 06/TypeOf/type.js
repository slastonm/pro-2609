let obj = {
    userName:'Bob',
    userInfo:function(){
        return `${this.userName} user`
    },
    userSkills: ['html', 'css'],
    userSkills2: {a:'html', b:'css'}
}

for(let key in obj){
        // if(typeof obj[key] == 'function'){

        // }
    console.log(`Obj info ${obj[key]}`);
}
// console.log(typeof  obj);


console.log(`typeof undefined ${typeof undefined}`);
console.log(`typeof boolean ${typeof true}`);
console.log(`typeof boolean ${typeof false}`);
console.log(`typeof string ${typeof 'Hello'}`);
console.log(`typeof string ${typeof ''}`);
console.log(`typeof string ${typeof ""}`);
console.log(`typeof string ${typeof `Result ${1+2}`}`);

console.log(`typeof number ${typeof 12343}`);
console.log(`typeof number ${typeof 0.12}`);
console.log(`typeof NaN ${typeof NaN}`);

console.log(`typeof array ${typeof [0.12, 12]}`);
console.log(`typeof Array construct ${typeof new Array()}`);

console.log(`typeof Day ${typeof new Date()}`);
console.log(`typeof null ${typeof null}`);
const sym = Symbol();
console.log(`typeof Symbol ${typeof sym}`);

console.log(`typeof regex ${typeof /regex/}`);
console.log(`typeof function ${typeof function fnHello (){
    return 'Hello'
}}`);

console.log(`typeof function ${typeof obj.userInfo}`);















