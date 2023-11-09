// AJAX (АЯКС - Asynchronous JavaScript And XML) 
let xhr = new XMLHttpRequest();
xhr.open('get', 'https://jsonplaceholder.typicode.com/todos/1', true);
xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status==200){
        // document.write(``)
        console.log(xhr.responseText);
    }
}
xhr.send(null);

//Get - дай мені дані
// Post - використовується для передачі данних на сервер і отримання відповіді
// Put - відправка данних і оновлення данних на сервері
// Delete 

let formData = JSON.stringify({
    title:'Hello',
    body:'Text body',
    userId: 12
});
xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts', true);
xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
xhr.send(formData);
xhr.onload =function(){
    let responseObj = xhr.response;
    console.log(responseObj);
}

fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json));