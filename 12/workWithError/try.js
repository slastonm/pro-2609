function testMe(){
    console.log(VariableHello);
}
let obj = {
    userName:'Tom',
    age:21,
    city: 'Dnipro'
}

try {
    // Виконуємо код який хочемо перевірити
    if(!obj.city){
        throw new SyntaxError('No information about user city');
    }
} catch (error) {
    console.log(error);
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
    if(error.name == 'ReferenceError'){
        alert('Error problem in variable');
    }

    
    // Виконуватись обробник помилок
}
finally{
    alert('Finaly');
}