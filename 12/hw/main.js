window.onload = function(){
    
    function validForm(){
        let nameValue = document.querySelector('#name').value;
        let phoneValue = document.querySelector('#phone').value;
        let emailValue = document.querySelector('#email').value;
        let btn = document.querySelector('.btn');
        if(nameValue !== '' && phoneValue !== '' && emailValue !== ''){
            btn.removeAttribute('disabled');
        }
        else{
            btn.setAttribute('disabled', 'disabled');
        }
    }

    document.addEventListener('keydown', function(){
        validForm();
    });
}