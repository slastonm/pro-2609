window.onload = function(){
    let btnChange = document.querySelector('button');
    btnChange.addEventListener('click', function(){
        let root = document.documentElement;
        console.log(getComputedStyle(root).getPropertyValue('--custom-bgcolor'));
        root.style.setProperty('--custom-bgcolor', '#ccc');
        root.style.setProperty('--my-color', 'green');
        root.style.setProperty('--afterColor', 'black');
    });
    let body = document.querySelector('body');
    let btnPosition = 0;
    body.onkeydown = function(e){
        console.log(e);
        if(e.keyCode == '40'){
            btnPosition +=10;
            btnChange.style.position = 'relative';
            btnChange.style.top = `${btnPosition}px`; 
        }
        
    }
}