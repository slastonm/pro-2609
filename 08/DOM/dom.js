window.onload = ()=>{
    const paragraphs = document.querySelectorAll('#modSection p');
    console.log(paragraphs);

    let elements = Array.from(paragraphs);
    console.log(elements);

    const [...pElements] = document.querySelectorAll('.p-list p');
    console.log(pElements);
    for(let i=0; i<pElements.length; i++){
        pElements[i].innerHTML= 'Changed!';
    }
    elements.forEach(item=>{
        item.innerHTML = `<span>Hello from span</span>`
    });

    let lastItem = document.querySelector('.p-list p:last-child');
    console.log(lastItem);
    lastItem.innerHTML = 'Last!'

    let liElement = document.querySelector('.menu li');
    console.log(liElement.parentElement);

    let bodyElement = document.querySelector('body')
    console.log(bodyElement.parentElement);

    let menuEl = document.querySelector('.menu');
    console.log(menuEl.firstElementChild);
    console.log(menuEl.lastElementChild);
    // console.log(menuEl.firstChild);
    // console.log(menuEl.lastChild);
    console.log([...menuEl.children]);
    let activeEl = document.querySelector('.active');
    console.log(activeEl.nextElementSibling);
    console.log(activeEl.previousElementSibling);

    let next = activeEl.nextElementSibling;
    let prev = activeEl.previousElementSibling;
    next.innerHTML = 'Next';
    // prev.innerHTML = 'Prev';

}   

