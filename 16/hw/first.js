// Домашня робота:
// - зробити запит гет і отримати юзерів з сервісу
// https://jsonplaceholder.typicode.com/
// - Вивести дані в карточки в кожні карточці доадти кнопку "вибрати користувача"
// - написати обробник подій який при натисканні на кнопку зберігає дані користувача в массив, а масив в локалсторедж. Кожне натискання на кнопку додає нового користувача в масив
// Додаткове завдання:
window.onload = function(){
    // if else
    window.localStorage.setItem('selected', JSON.stringify([]));
    let ulEl = document.querySelector('ul');
    let xhr = new XMLHttpRequest();
    xhr.open('GET','https://jsonplaceholder.typicode.com/users');
    xhr.onload = function(){
        if(xhr.status>=200 && xhr.status<300){
            let users = JSON.parse(xhr.responseText);
            console.log(users);
            
            users.forEach(element => {
                let liEl = document.createElement('li');
                liEl.innerHTML = `${element.name} <br> ${element.username} <br> ${element.phone}`;
                liEl.onclick = function(){
                    let data = JSON.parse(window.localStorage.getItem('selected'));
                    data.push(this.innerHTML);
                    window.localStorage.setItem('selected', JSON.stringify(data));
                }
                ulEl.append(liEl);
            });
        }
        else{
            alert(`Request error`);
        }
    }
    xhr.send();
}