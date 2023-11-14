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

function createData(post, callbackFn){
    setTimeout(()=>{
        posts.push(post);
        callbackFn();
    }, 2000);
}

getPosts();
createData({id:3, text:'hello3'}, getPosts);