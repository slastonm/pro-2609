window.onload = function(){
    function showMessage(){
        alert('Hello user');
    }
    setTimeout(showMessage, 5000); 
    // 1s = 1000ms;
    let body = document.querySelector('body');
    let bodyColorChange = setTimeout(function(){
        
        body.style.backgroundColor = 'yellow';
    }, 10000);
    let counter = 0;
    function countSeconds(){
        counter++;
        let boxText = document.querySelector('.example');
        boxText.innerHTML = `Counter value is ${counter}`;
    }
    // setInterval(function(){

    // }, 1000);
    setInterval(countSeconds, 1000);
    let displayCounterValue = 0;
    let displayEl = document.querySelector('.display');
    let stop = document.querySelector('.stop');
    let start = document.querySelector('.start');
    let intervalFunction;
    function displayCounter(){
        displayEl.innerHTML = displayCounterValue;
        displayCounterValue++;
    }
    start.onclick = function(){
        intervalFunction = setInterval(displayCounter, 1000);
    }
    stop.onclick = function(){
        clearInterval(intervalFunction);
        clearTimeout(bodyColorChange)
    }

}