window.onload = function(){
    let countdownEl = document.querySelector('.countdown');
    let startBtn = document.querySelector('button');
    function startCount(){
        let timeLimit = 10;
        countdownEl.innerHTML = timeLimit;
        let countDownInterval = setInterval(function(){
            timeLimit --;
            countdownEl.innerHTML = timeLimit;
            if(timeLimit<=0){
                countdownEl.innerHTML = 'Timer finished';
                clearInterval(startCount);
            }
            else{

            }
        }, 1000);
    }
    startBtn.onclick = function(){
        startCount();
    }
}