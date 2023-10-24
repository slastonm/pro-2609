window.onload = function(){
    let isTunel = false;
    let firstEl = document.querySelector('#first');
    let secondEl = document.querySelector('#second');
    let thirdEl = document.querySelector('#third');

    firstEl.addEventListener('click', function(){
        alert('first');

        this.style.backgroundColor = 'blue';
    }, isTunel);
    secondEl.addEventListener('click', function(){
        alert('second');

        this.style.backgroundColor = 'yellow';
    }, isTunel);
    thirdEl.addEventListener('click', function(event){
        alert('third');
        this.style.backgroundColor = 'violet';
        event.stopPropagation();
    }, isTunel);    
}

