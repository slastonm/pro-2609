window.onload = function(){
    let openBtn = document.querySelector('.open');
    let modalWindow = document.querySelector('.modal');
    let overlayBlock = document.querySelector('.overlay');
    let closeBtn = document.querySelector('.close');

    function openCloseModal(){
        overlayBlock.classList.toggle('open');
        modalWindow.classList.toggle('open'); 
    }
    openBtn.onclick = function(){

        let modalStyle = getComputedStyle(modalWindow);
        console.log(`window size ${modalStyle.width} and ${modalStyle.height}`);
        let windowWidth = window.innerWidth;
        let windowHeight = window.innerHeight;
        modalWindow.style.top = `${windowHeight/2 - parseFloat(modalStyle.height)/2}px`;
        modalWindow.style.left = `${windowWidth/2 - parseFloat(modalStyle.width)/2}px`;
    }
    closeBtn.onclick = function(){
        overlayBlock.classList.toggle('open');
        modalWindow.classList.toggle('open');
    }
}