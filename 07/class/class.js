function Person(fName, sName, age){
    this.firstName = fName;
    this.lastName = sName;
    this.age = age;
    // this.personMthod = function(){
    //     return `${this.firstName}`;
    // }
}
Person.prototype.userInfo = function(){
    return `${this.firstName}`;
}

let stivJ = new Person('Stiv', 'Jobs', 30);
console.log(stivJ);

class PersonClass {
    constructor(name, year){
        this.name = name;
        this.year = year;
    }
    bornDate(){
        let date = new Date();
        return date.getFullYear()-this.year;
    }
    get userInfo(){
        return `${this.name} and ${this.year}`
    }

    get userObj(){
        return {
            getName:this.name,
            getYear:this.year,
            getBorn: this.bornDate()
        }
    }

    set setName(value){
        if(value.length < 3){
            console.log('Short name');
            return;
        }
        this.name = value;
    }

    static userCounter = 10;
    static myStaticMethod(){
        console.log('Hello static method');
    }
}

let robUser = new PersonClass('Rob', 23);
robUser.setName ='Robinson';
console.log(robUser);
let userInfo = robUser.userInfo;
let userAddObj = robUser.userObj;
console.log(userInfo);
console.log(userAddObj);


console.log(robUser.userCounter);
console.log(PersonClass.userCounter);
PersonClass.myStaticMethod();

class Employee extends PersonClass{
    constructor(name, year, position){
        super(name, year);
        this.position = position;
    }
    get employeeInfo(){
        return{
            position:this.position,
            ...this.userObj
        }
        
    }
}


let employeeJohn = new Employee('John', 24, 'Developer');
employeeJohn.setName ='Jonsonuk';
console.log(employeeJohn);
console.log(employeeJohn.employeeInfo);