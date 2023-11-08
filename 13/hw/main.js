window.onload = function(){
    let formPizza = document.querySelector('#pizzaForm');
    let totalPriceElement = document.querySelector('#totalPrice');
    let orderBtn = document.querySelector('.orderBtn');
    let orderForm = document.querySelector('#orderForm');
    const prices ={
        small:5,
        medium:10,
        large:15,
        margarita:20,
        cheeseType:25,
        gavai:30,
        topping:5
    }

    formPizza.addEventListener('change', function(){
        let totalPrice = 0;
        const  selectSize = document.querySelector('input[name="pizzaSize"]:checked');
        if(selectSize){
            totalPrice+=prices[selectSize.value];
        }
        const selectType = document.querySelector('#pizzaType');
        totalPrice +=prices[selectType.value];

        const [...selectToppings] = document.querySelectorAll('input[name="topping"]:checked');
        selectToppings.forEach(function(tooping){
            totalPrice+=prices.topping;
        });

        totalPriceElement.innerHTML = `Вартість замовлення: ${totalPrice}`;
    });

    orderBtn.addEventListener('click', function(e){
        e.preventDefault();
        formPizza.classList.add('d-none');
        orderForm.classList.remove('d-none');
    });

    function validForm(){
        console.log('validation work');
        let nameValue = document.querySelector('#name').value;
        let phoneValue = document.querySelector('#phone').value;
        let emailValue = document.querySelector('#email').value;
        let btn = document.querySelector('.sendMail');
        let phoneRegex = /^\d{12}$/;
        // let emailRegex = /^[a-zA-Z0-9.-_]+@[a-zA-Z0-9.-_]+\.[a-zA-Z]{2,4}$/;
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(nameValue !== '' && phoneRegex.test(phoneValue) && emailRegex.test(emailValue)){
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