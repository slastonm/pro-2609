let posts = [
    {id:1, text:'hello'},
    {id:2, text:'hello2'}
];

function getPosts(){
    setTimeout(()=>{
        let dataItem ='';
        posts.forEach(post=>{
            dataItem+=`<p>${post.text}</p>`
        });
        document.body.innerHTML = dataItem;
    }, 1000);
}



function createData(post){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            posts.push(post);
            let erro = false;
            // let erro = true;

            if(!erro){
                resolve();
            }
            else{
                reject('Error in promise');
            }
        }, 2000);
    });
}

// getPosts();
// createData({id:3, text:'hello3'}, getPosts);
// createData({id:3, text:'hello3'}).then(getPosts).catch(err=>console.log(err));

async function start(){
    await createData({id:3, text:'hello3'});
    getPosts();
}
start();

async function fetchData(){
    // fetch('https://jsonplaceholder.typicode.com/todos/1')
    //   .then(response => response.json())
    //   .then(json => console.log(json))
    let result = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    let data = await result.json();
    console.log(data);
}

fetchData();
