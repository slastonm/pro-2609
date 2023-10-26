window.onload = function(){
    let pEl = document.querySelector('.narrowP');
    window.addEventListener('scroll', function(){
        let scrolPosition = window.scrollY;
        // console.log(scrolPosition);
        function randomColor(){
            let red = Math.floor(Math.random()*256);
            let green = Math.floor(Math.random()*256);
            let blue = Math.floor(Math.random()*256);
    
            return `rgb(${red}, ${green}, ${blue})`;
        }

        if(Math.floor(scrolPosition % 10) === 0){

            pEl.style.backgroundColor = randomColor();
        }

    });
    let divEl = document.querySelector('div');
    divEl.addEventListener('copy', function(){
        alert('Copied');
    });
    pEl.addEventListener('copy', function(e){
        alert('Copy disabled');
        e.preventDefault();

    });
    // pEl.oncopy = function(e){
    //     console.log(111);
    // }
    textEreaEl = document.querySelector('textarea');
    textEreaEl.addEventListener('paste', (event)=>{
        alert('Paste text disabled');
        event.preventDefault();
    });

    let documentInfo = document;
    // console.log(documentInfo);
    console.log(documentInfo.location.host);
    console.log(documentInfo.location.pathname);
    console.log(documentInfo.location.protocol);
    
    divEl.addEventListener('click', function(){
        documentInfo.location = "https://prog.kiev.ua/";
    });
    function checkValue(element){
        // let arr = [];
        // arr.length
        if(element.value.length <10){
            element.style.border = '5px solid red';
            element.nextElementSibling.style.border = '5px solid red';
        }
    }
    let inputEl = document.querySelector('input');
    inputEl.addEventListener('focus', function(){
        this.style.border = '5px solid blue';
        console.log(this);
    });
    inputEl.addEventListener('input', function(){
        this.style.border = '5px solid orange';
        checkValue(this);
    });
    inputEl.addEventListener('blur', function(){
        this.style.border = '5px solid green';
        checkValue(this);
    });
}