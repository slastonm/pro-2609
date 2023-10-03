
let lesTenValue = [];
let greateTenValue = [];

let sortValue = [1,2,3,4,7,8,10,11, 15, 17, 20, 30, 40];

function sortLessValue (value, sortLimit, sortArray ){
    if(value < sortLimit){
        sortArray.push(value);
    }
}



for(let i=0; i<sortValue.length; i++){
    // if(sortValue[i]<10){
    //     lesTenValue.push(sortValue[i]);
    // }
    sortLessValue(sortValue[i], 10, lesTenValue);
}
for(let i=0; i<sortValue.length; i++){
    // if(sortValue[i]<20){
    //     greateTenValue.push(sortValue[i]);
    // }
    sortLessValue(sortValue[i], 30, greateTenValue);


}

console.log(lesTenValue);
console.log(greateTenValue);
