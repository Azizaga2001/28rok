1)
//что выведет в консоли функция call
const person = {
    name: 'Alex',
    age: 24,
    call: function() {
        console.log(`${this.name} = ${this.age}`);
    }
}

//name and age

2)
//получите доступ к методу call и запустите его
const person = {
    name: 'Alex',
    age: 24,
    call: function() {
        console.log(`${this.name} = ${this.age}`);
    }
}

person.call()

console.log(person.call());

3)
//выведите в консоли все ключи из обьекта с помощью for
const person = {
    name: 'Alex',
    age: 24,
    city: 'Baku',
    call: function() {
        console.log(`${this.name} = ${this.age}`);
    }
}

for (let x in person) {
    console.log(x);
}

4)
//выведите в консоли все значения из обьекта с помощью for
const person = {
    name: 'Alex',
    age: 24,
    city: 'Baku',
    call: function() {
        console.log(`${this.name} = ${this.age}`);
    }
}

for(let x in this.person){
    console.log(x);
}

5)
//преобразуйте обьект ниже в массив
const person = {
    name: 'Alex',
    age: 24,
    city: 'Baku',
    call: function() {
        console.log(`${this.name} = ${this.age}`);
    }
}

const myarr = Object.values(person)

6)
//преобразуйте обьект ниже в строку
const person = {
    name: 'Alex',
    age: 24,
    city: 'Baku',
    call: function() {
        console.log(`${this.name} = ${this.age}`);
    }
}

let mystr = JSON.stringify(person)

7)
//преобразуйте обьект ниже в конструктор функции
let obj = {
    name: 'Alex',
    age: 24,
    isMarried: false,
    hasCar: false,
    hasJob: true,
    job: 'Programmer',
    childs: ['Hanz', 'Marry'],
    awards: {
        itMaster: 'Legend rang',
        driver: 'Fast man'
    }
}

//?

8)
//перечисли встроенные конструкторы javascript
//String 
//Number
//Boolean
//Object
//Array
//RegExp
//Fuction
//Date
9)
//создайте новый обьект используя конструктор ниже
function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
}

//?
