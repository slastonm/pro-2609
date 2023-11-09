localStorage.setItem('MylocalStorag', 'firstValue');
localStorage.myLocalKey = 'localKey';
localStorage['keyValue'] = 123;

console.log(`storage data ${localStorage.getItem('myLocalKey')}`);

localStorage.removeItem('keyValue');
// localStorage.clear();
// [{"id":2,"image":"https://rickandmortyapi.com/api/character/avatar/2.jpeg","name":"Morty Smith","status":"Alive"},{"id":3,"image":"https://rickandmortyapi.com/api/character/avatar/3.jpeg","name":"Summer Smith","status":"Alive"},{"id":4,"image":"https://rickandmortyapi.com/api/character/avatar/4.jpeg","name":"Beth Smith","status":"Alive"}]

// let userFilter= [{
//     menuState:true,
//     minPrice: 2000,
//     maxPrice:5000
// }]
// ;let jsonValue = JSON.stringify(userFilter);
// localStorage.setItem('userFilter', jsonValue);

// let localStorageValue = localStorage.getItem('userFilter');
// let parseValue = JSON.parse(localStorageValue);
// parseValue.push({
//     menuState:false,
//     minPrice: 1000,
//     maxPrice:3000
// });
// localStorage.userFilter = JSON.stringify(parseValue);
// console.log(parseValue);
// console.log(`Test value${localStorage.getItem('userFilter')}`);
window.onload = function(){
    console.log(localStorage.length);
    if(localStorage.length>=1){
        let data = localStorage.getItem('userFilter');
        let storageData = JSON.parse(data);
        storageData.forEach(element => {
            document.write(`<div>
            <h4>
            ${element.menuState}
            </h4>
            <p>
            Min : ${element.minPrice} <br>
            Max : ${element.maxPrice}
            </p>
            </div>`)
        });
    }
}
