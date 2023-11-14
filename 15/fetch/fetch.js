let siteData = fetch('https://jsonplaceholder.typicode.com/posts/1')
.then(respose=>respose.json())
.then(json=>console.log(json));

window.onload = function(){
    fetch('https://swapi.dev/api/films/')
    .then(respose=>{
        document.querySelector('.loading').style.display = 'none';
        return respose.json();
    })
    .then(data=>{
        data.results.forEach(element => {
            document.write(`
                <h3>${element.title}</h3>
                <p>
                ${element.opening_crawl}
                </p>
            `);
        });
        console.log(data);
    });    
}


fetch('https://jsonplaceholder.typicode.com/posts', {
    method:'Post',
    body: JSON.stringify({
        title:'Hello',
        body:'body text',
        userId: 111
    }),
    headers:{
        'Content-type': 'application/json; charset=UTF-8'
    }

}).then(reponse=>reponse.json()).then(data=>console.log(data));

