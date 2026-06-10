
// Write a function called sum that finds the sum from 1 to a number
function sum(n){
    return (n * (n + 1)) / 2;
}
console.log(sum(5));


// Write a function that takes a user as an input and greets them with their name and age
function greet(username){
    console.log("Hi " + username.name + " your age is " + username.age);    
}
let username ={
    name: "ABC",
    age: 99
}
greet(username);


