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


let person = {
    name: "John",
    age: 30,
    city: "New York"
};
console.log(`my details are ${JSON.stringify(person)}`); // Output: my details are {"name":"John","age":30,"city":"New York"}

