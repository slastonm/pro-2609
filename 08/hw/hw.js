//  1) Створити функцію яка з массиву вибирає всі булеві значення
const sort = [true, 'false', 111, -0, 'true', false, {a:false}, [true, 'false']];

function selectBoolean(value){
    return value.filter(item => item === true || item === false);
}

let filterValue = selectBoolean(sort);
console.log(filterValue);

// 2) Створити функцію яка повертає сторіччя, функція отримує рік
// 1810->19
// 1700 -> 17
// 1601 ->17 
// 2000 -> 20

function convertYear(year){
    return Math.round(year/100);
}
console.log(convertYear(1810));
console.log(convertYear(1700));
console.log(convertYear(1601));
console.log(convertYear(901));

// 3) створити класс конструктор filmMaker який отримує, назву фільма, рік виходу, рейтинг. Всередині классу створити get метод який виводить всю інформацію про класс

class filmMaker{
    constructor(filmName, year, rating){
        this.filmName = filmName;
        this.year = year;
        this.rating = rating;
    }
    get filmInfo(){
        return `${this.filmName} was created in ${this.year} rating ${this.rating}`;
    }
}

let terminator = new filmMaker('terminator', 1995, 5);
console.log(terminator);
console.log(terminator.filmInfo);

// 4) Створити класс filmDetail який наслідує filmMaker  і отримує ще поля жанр фільму, вікова категорія , в классі створити get який повертає обєкт з усіма ключами значень з filmMaker і filmDetail

class filmDetail extends filmMaker{
    constructor(filmName, year, rating, type, restriction){
        super(filmName, year, rating);
        this.type = type;
        this.restriction = restriction;
    }
    get allInfo(){
        return {
            filmNameCopy : this.filmName,
            yearCopy : this.year,
            ratingCopy : this.rating,
            typeCopy : this.type,
            restrictionCopy : this.restriction
        }
    }

}

let moreDetail = new filmDetail('terminator', 1995, 5, 'action', '13+');

console.log(moreDetail);
console.log(moreDetail.allInfo);