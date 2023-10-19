window.onload = function(){
    let newElement = document.createElement('div'); // {}
    newElement.innerHTML = 'Hello from js';
    let sectionId = document.querySelector('#modSection');
    console.log(sectionId);
    sectionId.appendChild(newElement);
    // document.body.appendChild(newElement);
    let divEl = document.createElement('div');
    divEl.id = 'divId';
    divEl.className = 'js-class';
    divEl.innerHTML = 'Super div';
    sectionId.appendChild(divEl);

    let hTitle = document.createElement('h1');
    hTitle.id = 'hTitle';
    hTitle.className = 'js-class';
    hTitle.innerHTML = 'Super h1';
    document.body.insertBefore(hTitle, sectionId);

    let headerList = document.querySelector('header ul');
    function createHeaderItem(str){
        let li = document.createElement('li');
        li.innerHTML = str;
        return li;
    }

    // headerList.appendChild(createHeaderItem('Home'));
    // headerList.appendChild(createHeaderItem('About'));
    // headerList.appendChild(createHeaderItem('Sale'));
    let menuContent = ['Home', 'About', 'Sale', 'Contacts'];
    menuContent.forEach(item=>{
        headerList.appendChild(createHeaderItem(item));
    });

    let lastHeaderItem = document.querySelector('header ul li:first-child');

    headerList.removeChild(lastHeaderItem);

    function removeLastChild(){
        let menuEl = document.querySelector('.menu');
        let lastItem = menuEl.lastElementChild;
        menuEl.removeChild(lastItem)
        // if(lastItem !== null){
            
        // }
    }

    removeLastChild();
    removeLastChild();
    removeLastChild();
    removeLastChild();




}