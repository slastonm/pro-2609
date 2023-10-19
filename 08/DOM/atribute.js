window.onload = function(){
    let [...links] = document.querySelectorAll('nav a');
    console.log(links);
    let linksHref = [];
    links.forEach(link=>{
        linksHref.push(link.getAttribute('href'));
    });
    console.log(linksHref);
    let nav = document.querySelector('nav');
    console.log(nav.getAttribute('class'));

    let input = document.querySelector('input');
    input.setAttribute('type', 'password');
    input.setAttribute('class', 'form-element');
    input.setAttribute('placeholder', 'type text');
    input.setAttribute('disabled', 'disabled');

    input.removeAttribute('disabled');
    input.removeAttribute('class');

    let hTitle = document.querySelector('h1');
    hTitle.setAttribute('style', 'background: yellow;padding: 30px;');
    // hTitle.setAttribute('style', 'color:red');
    // console.log(hTitle.style.cssText);
    hTitle.style.cssText +='color:red';

    let subTitle = document.querySelector('h2');

    subTitle.style.color = 'orange';
    subTitle.style.fontWeight = 'bold';
    subTitle.style.paddingTop = '100px';
    function randomColor(){
        let red = Math.random();
        let blue = Math.random();
        let green = Math.random();
        return `rgb(${red}, ${blue}, ${green})`;
    }
    subTitle.style.backgroundColor = 'rgb(130, 17, 236)';

}