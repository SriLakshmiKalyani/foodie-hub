"use strict";
let restaurantName = "Foodie-Hub";
console.log(restaurantName);
let city = "Hyderabad";
console.log(city);
let isOpen = true;
console.log(isOpen);
let ratings = [4, 5];
console.log(ratings);
let ordervalue = 199;
ordervalue = "Burger order";
ordervalue = true;
let paymentdata = "paid";
if (typeof paymentdata === "string") {
    console.log(paymentdata.toUpperCase());
}
let menu = [
    {
        id: 1, name: "pizza", price: 199
    },
    {
        id: 2, name: "burger", price: 149
    },
    {
        id: 3, name: "pasta", price: 249
    }
];
console.log("foodie-hub menu");
for (let item of menu) {
    console.log(`${item.id}.${item.name}-Rs.${item.price}`);
}
function showWelcome() {
    console.log("welcome to foodie-hub");
}
showWelcome();
function showFood(name, price) {
    console.log(`${name} - Rs.${price}`);
}
showFood("pasta", 149);
function getTotal(a, b) {
    return a + b;
}
let bill = getTotal(199, 149);
console.log("Bill", bill);
function customer(name, tableNo) {
    console.log(name, tableNo);
}
customer("kalyani");
customer("kalpana", 22);
function welcomecustomer(name = "Guest") {
    console.log("welcome" + name);
}
welcomecustomer();
welcomecustomer("kalyani");
const greetCustomer = function () {
    console.log("Hello Customer");
};
greetCustomer();
const addPrice = (a, b) => {
    return a + b;
};
console.log(addPrice(199, 149));
const calculateBill = (items) => {
    let total = 0;
    for (let item of items) {
        total = total + item.price;
    }
    return total;
};
console.log("Final Bill");
for (let item of menu) {
    console.log(`${item.id}.${item.name}-Rs.${item.price}`);
}
console.log(`total=Rs.${calculateBill(menu)}`);
let order = 50;
console.log(order);
order = "done";
console.log(order);
let currentstatus = "Pending";
console.log(currentstatus);
currentstatus = "Delivered";
console.log(currentstatus);
//class Customer{
// name:string="kalyani";
// age:number=21;
// display():void{
//   console.log(this.name);
//  console.log(this.age);
//}
//}
//let C1=new Customer();
//C1.display();
class Order {
    food = "pizza";
    price = 199;
}
let Order1 = new Order();
console.log(Order1.food);
console.log(Order1.price);
class Employee {
    name;
    salary;
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    display() {
        console.log(this.name);
        console.log(this.salary);
    }
}
let emp1 = new Employee("kalyani", 25000);
emp1.display();
class Customer {
    name = "kalyani";
}
let C1 = new Customer();
console.log(C1.name);
class Consumer {
    number = 6392749358;
    display() {
        console.log(this.number);
    }
}
let c1 = new Consumer();
c1.display();
class Food {
    state = "crunchy & well cooked";
}
class Pizza extends Food {
    display() {
        console.log(this.state);
    }
}
let p = new Pizza();
p.display();
class Foodreview {
    eat() {
        console.log("Food is super");
    }
}
class Burger extends Foodreview {
    excellent() {
        console.log("Burger is excellent");
    }
}
let b = new Burger();
b.eat();
b.excellent();
class Fooditem {
    taste() {
        console.log("Fooditems is good");
    }
}
class Pasta extends Fooditem {
    taste() {
        console.log("marveless fooditem");
    }
}
let a = new Pasta();
a.taste();
