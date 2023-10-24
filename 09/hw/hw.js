// 1) Створити код що створює 50 елементів div на сторінці з різним коліром ( реалізувати функцію для цього ) з стилями: ширина 100рх і висота 100рх і бордер радіус 100%. Всі ці значення задати через js

// 2) Створити тег header а в середені нього 3 тага A яким задати за допомгою js атрібут href і target
window.onload = function(){
    function getRandomValue(){

    }
    function randomColor(){
        let red = Math.floor(Math.random()*256);
        let green = Math.floor(Math.random()*256);
        let blue = Math.floor(Math.random()*256);

        return `rgb(${red}, ${green}, ${blue})`;
    }
    let containerEl = document.querySelector('.container');
    for(let i=0; i<50; i++){
        let div = document.createElement('div');
        div.style.borderRadius = '100%';
        div.style.width = '100px';
        div.style.height = '100px';
        div.style.backgroundColor = randomColor();
        containerEl.appendChild(div);
    }

    let links = [
        {
            linkName:'Main',
            link:'https://q.prog.kiev.ua/'
        },
        {
            linkName:'Home',
            link:'https://q.prog.kiev.ua/home'
        },
        {
            linkName:'About',
            link:'https://q.prog.kiev.ua/about'
        }
    ];
    let body = document.querySelector('body');
    let headerEl = document.createElement('header');
    headerEl.style.padding = '50px';
    headerEl.style.backgroundColor = 'lightgray';
    headerEl.style.textAlign ='center';
    body.appendChild(headerEl);

    for(let i=0; i<links.length; i++){
        let linkEl = document.createElement('a');
        linkEl.style.display = 'inline-block';
        linkEl.style.padding = '10px';
        linkEl.innerHTML = links[i].linkName;
        linkEl.setAttribute('href', links[i].link);
        linkEl.setAttribute('target', '_blank');
        headerEl.append(linkEl);
    }

}