let obj = {
    userName:'Tom',
    usetComent:'Hello',
    // userInfo:function(){
    //     // this
    //     // console.log(`This is ${obj.userName} left ${obj.usetComent}`);
    //     console.log(`This is ${this.userName} left ${this.usetComent}`);

    // }
    userInfo:()=>{
        // this
        // console.log(`This is ${obj.userName} left ${obj.usetComent}`);
        console.log(`This is ${this.userName} left ${this.usetComent}`);

    }
}

obj.userInfo();


console.log([1,23,3]);