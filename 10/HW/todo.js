window.onload= function(){
    let inputEl = document.querySelector('#staticEmail2');
    let addButton = document.querySelector('#addItem');
    let reverseButton = document.querySelector('#reverseList');

    addButton.addEventListener('click', function(e){
        console.log(inputEl.value);
        e.preventDefault();
    });
    reverseButton.addEventListener('click', function(e){
        console.log(inputEl.value);
        e.preventDefault();
    });
}