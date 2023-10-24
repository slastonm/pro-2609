window.onload = function(){
    let clickBtn = document.querySelector('.clickBtn');
    let clickCounter = 0;
    clickBtn.onclick = function(){
        console.log(`click counter value ${clickCounter}`);
        clickCounter++;
    }

    let addClickBtn = document.querySelector('.addClick');
     let conunt = 0
    function showCounterInfo(){
        
        addClickBtn.innerHTML =`Add click ${conunt}`;
        conunt++;
    }

    // addClickBtn.addEventListener('click', function(){
    //     console.log('AdEventlistner');
    // });
    addClickBtn.addEventListener('click', showCounterInfo);

    let removeBtn = document.querySelector('.remove');
    removeBtn.addEventListener('click', function(){
        addClickBtn.removeEventListener('click', showCounterInfo);
        alert('Event was removed');
    });

    let mainTitle = document.querySelector('h1');
    mainTitle.addEventListener('click', function(){
        console.log(this);
        this.innerHTML = `${this.innerText} hello`;
        this.style.backgroundColor='red';
    });

    let liElements = document.querySelectorAll('ul li');
    console.log(liElements);
    liElements.forEach(item => item.addEventListener('click', function(event){
        this.style.backgroundColor = 'yellow';
        console.log(event);
    }));

    let linkEl = document.querySelector('a');
    linkEl.addEventListener('click', function(e){
        console.log('clicked');
        e.preventDefault();
    });

    let inputEl = document.querySelector('input');
    inputEl.addEventListener('keyup', function(){

        console.log(this.value);

    })
    // inputEl.addEventListener('change', function(){

    //     console.log(this.value);

    // })
}