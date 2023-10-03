let buy = prompt('I want buy ?');

switch(buy){
    case 'milk':
    case 'Milk':
        console.log('Milk cost 1$');
        break;
    case 'orange':
        console.log('Orange cost 1$');
        break;
    case 'Cat':
    case 'cat':
        console.log('Cat cost 10$');
        break;
    default:
        console.log(`Sorry any ${buy}`);
}