window.onload = function(){
    let subTitle = document.querySelector('h2');
    let subTitleStyles = getComputedStyle(subTitle);
    console.log(subTitleStyles);
    let menuEl = document.querySelector('#menu');
    console.log(menuEl.className);
    // menuEl.className = 'test-menu';
    menuEl.className += ' test-menu';
    console.log(menuEl.classList);
    menuEl.classList.add('add-class', 'js-class', 'visible');
    
    // remove class name
    menuEl.classList.remove('test-menu');
    menuEl.classList.remove('test');
    menuEl.classList.remove('add-class', 'js-class');

    // replace
    menuEl.classList.replace('visible', 'info-block');

    // contains
    // let info = menuEl.classList.contains('btn');
    let info = menuEl.classList.contains('info-block');
    console.log(`class contain info-block ${info}`);
    // if(menuEl.classList.contains('open')){
    //     menuEl.classList.remove('open');
    // }
    // else{
    //     menuEl.classList.add('open');
    // }
    let btnEl = document.querySelector('.btn');
    btnEl.onclick = function(){
        menuEl.classList.toggle('open');
    }    

}