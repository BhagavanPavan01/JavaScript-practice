// let arr1 = [1,2,3,4];
// let arr2 = [...arr1,5,6,7,8,9];
// console.log(arr2);



// let person = {
//     name: "John",
//     age: 30, 
//     city: "New York"
// }

// let personDetails = {
//     ...person, phone: "9578622468 "
// }; 
// console.log(personDetails);


// function add(a,b,c){
//     return a+b+c;
// }
// let numbers = [1,2,3,4,5,6,7,8,9,10];
// let sum = add(...numbers);
// console.log(sum); // Output: 6



// function numbers(...args){
//     console.log(args);
// }
// numbers(1,2,3,4,5,6,7,8,9,10); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]  



// function num(a,b,...rest){
//     console.log(a);
//     console.log(b);
//     console.log(rest);
// }

// num(1,2,3,4,5,6); // Output: 1 2 [3, 4, 5, 6]


// function sum(...args){
//     let result = 0;
//     for(let arg of args){
//         result = result + arg;
//     }
//     console.log(result);
// }

// sum(1,2,3,4,5);
// sum(1,2,3);
// sum(1,2,3,4,5,67);



// let [a,b,...c] = [1,2,3,4,5,6,7,8,9,10];
// console.log(a);
// console.log(b);
// console.log(c);



// let {firstName, ...z} = {firstName:"Pavan",age :21, city:"Srikakulam"};
// console.log(firstName);
// console.log(z);

// function numm(a=10,b=20){
//     console.log(a);
//     console.log(b);
// }

// numm();
// numm(5,6); 


// let result = `the sum of 10 and 20 is ${10+20}.`;
// console.log(result); 


// let person = {
//     name: "John",
//     age: 30,
//     city: "New York"
// };
// console.log(`my details are ${JSON.stringify(person)}`); // Output: my details are {"name":"John","age":30,"city":"New York"}  




// let a = 10;
// let b = 20;

// (a<b) ? console.log("a is less") : console.log("b is less");


// let speed = 70;
// let message = speed >= 100 ? "Too fast" : "Ok";
// console.log(message); 



// let day = 7;
 
// switch(day){
//     case 0:
//         console.log("Sunday");
//         break;
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuseday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     default:
//         console.log("Invalid day");
//         break;
// }



// let sum = (a,b) => {
//     let result = a+b;
//     return result;
// }

// console.log(sum(10,20));



// function createCar (brand, color){
//     return {
//         brand: brand,
//         color: color,
//         drive: function(){
//             console.log("started");
//         }
//     };
// }


// car1 = createCar("BMW", "red");
// car2 = createCar("Audi", "blue");
// car3 = createCar("Mercedes", "black");
// console.log(car1);
// console.log(car2);
// console.log(car3);
// car1.drive();
// car2.drive();
// car3.drive();


 

// function Car (color,brand){
//     this.color = color;
//     this.brand = brand;
//     this.drive = function(){
//         console.log("started");
//     };
// }


// let car1 = new Car("red", "BMW");
// let car2 = new Car("blue", "Audi");
// console.log(car1);
// console.log(car2);





// function Car (color,brand){
//     this.color = color;
//     this.brand = brand;
//     this.drive = function(){
//         console.log("started");
//     };
// }
// console.log(Car.name);
// console.log(Car.length);
// console.log(typeof(Car));



// let myObject = {
//     name: "John",
//     age: 30,
//     city: "New York"
// }


// let returnMyObject = myObject;
// console.log(returnMyObject);
// console.log(returnMyObject.constructor);




// function Car (color,brand){
//     this.color = color;
//     this.brand = brand;
//     this.drive = function(){
//         console.log("started");
//     };
// }

// let car1 = new Car("red", "BMW");
// console.log(car1.constructor);


// let datecontainerEl = document.getElementById("datecontainer");

// let now = new Date("2022-01-19");
// console.log(now);
// console.log(typeof(now));


// let date1 = new Date(1947,7,14,11,14,15,0);

// console.log(date1.getFullYear());
// console.log(date1.getMonth());
// date1.setFullYear(2023);
// console.log(date1.getFullYear());
// console.log(date1.getDate());

  


// let car = {
//     brand: "BMW",
//     color: "red",
//     drive: function(){
//         console.log(this);
//     }
// }


// car.drive();



// function add(){
//     console.log(this);
// }

// add();



//  add() => {
//     console.log(this);
// }


// add();




// let car = {
//     color :"red",
//     brand :"BMW",
//     pavan: function(){
//         setInterval(() => {
//             console.log(this);
//         }, 1000);

//         setTimeout(()=>car.pavan(),1000);
//     }
// }

// car.pavan(); 



// function Car(color,brand){
//     this.color = color;
//     this.brand = brand;
//     this.drive = () => {
//         console.log("this");
//     };
// }


// let car1 = new Car("red", "BMW");
// console.log(car1);




// let x = { value: 20};
// let y = x;
// let z = { value: 250};
// y.value = 30;
// console.log(x);
// console.log(y);
// console.log(z);
// y = z;
// console.log(x);
// console.log(y);




// const myObj = {
//     name: "John",
//     age: 30, 
//     city: "New York"
// }


// let myObj2 = {
//     ...myObj,
//     DOB : "1990-01-01",
//     phone : "1234567890"
// } 

// // console.log(myObj2);

// myObj = {};
// console.log(myObj)



// let myArray = new Array(10,20,30,40,50,60,70,80,90,100);
// myArray.push(1000);
// // console.log(Array.prototype);

// // console.log(myObj2);

// console.log(Object.getPrototypeOf(myArray)); 


// let Car = new Function("color,brand",`this.color = color;
//     this.brand = brand;
//     this.start = function(){
//         console.log("started");
//     };`);

// let car1 = new Car("red", "BMW");
// console.log(Car.prototype);
// console.log(car1);
// console.log(Object.getPrototypeOf(car1));




// function Person(firstName, lastName){
//     this.firstName = firstName;
//     this.lastName = lastName;
// }

// Person.prototype.displayFullName = function(){
//     console.log(this.firstName + " " + this.lastName);
// }
// // console.log(Person.prototype);
// let person1 = new Person("Virat", "Kohili");

// console.log(person1.displayFullName());
// console.log(Object.getOwnPropertyNames(person1));



// class Person{
//     constructor(firstName, lastName){
//         this.firstName  = firstName;
//         this.lastName =  lastName
//     }

//     displayFullName(){
//         console.log(this.firstName + " "+ this.lastName);
//     }
// } 


// let person1 = new Person("Bhagavan","Pavan");
// let person2 = new Person("Pedada","Gayathri");
// // console.log(Object.getPrototypeOf(person1));
// // console.log(Person.prototype);

// console.log(person1);
// console.log(person2);

// console.log(typeof(Person));


// ---------------------------------------------Inheritance-----------------------------------


// class Animal {
//     constructor(name){
//         this.name = name;
//     }
//     eat(){
//         return `${this.name} is eating`;
//     }
//     makeSound(){
//         return this;
//     }
// }


// class Dog extends Animal {
//     constructor(name, breed){
//         super(name);
//         this.breed = breed;
//     }
//     sniff(){
//         return `${this.name} is Sniffing`;
//     }
// }


// let someDog = new Dog("Tommy", "Labrador");
// console.log(someDog.makeSound()); 



// alert("Hello World!");
// alert("Bhagavan Pavan");
// alert("Welcome to JavaScript!");



const url = "https://gorest.co.in/my-account/access-tokens ";
let responceObject = fetch(url);
    // .then((responce) => {
    //     return responce.json();
    // })
    // .then((jsonData) => {
    //     console.log(jsonData);
    // });


// console.log(responceObject); // Output: Promise { <pending> }
// console.log("Fetching done!");


responceObject.then((responce) => {
    console.log(responce.json());
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
})