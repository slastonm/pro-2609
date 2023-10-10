// function test(){
//     return new Object();
// }

function ProductConstructor(productName, productPrice){
    this.productName = productName;
    this.productPrice = productPrice;
    // this.productInfo = function(){
    //     return `This product ${this.productName} has price ${productPrice}`
    // }
}

ProductConstructor.prototype.productInfo = function(){
    return `This product ${this.productName} has price ${this.productPrice}`
}


let TV = new ProductConstructor('Sony', '500$');
let phone = new ProductConstructor('iPhone', '1500$');


console.log(TV);
console.log(TV.productInfo());
console.log(phone.productInfo());
