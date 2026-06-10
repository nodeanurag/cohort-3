// Create a variable for each of the following: your favorite color, your height in centimeters, and whether you like pizza. Use appropriate variable declarations (let, const, or var). Try logging it using console.log

const favColor = ["White", "Navy Blue", "Red"];
const myHeight = "177.80 cm";
const pizzaPerson = false;

console.log(favColor);
console.log(myHeight);
console.log(pizzaPerson);

// Write a function sum that finds the sum of two numbers. Side quest - Try passing in a string instead of a number and see what happens?

function addition(a,b){
    let totalSum = a + b;
    return totalSum;
}
let message = addition("5",10);
console.log(message);


// Write a function called canVote that returns true or false if the age of a user is > 18.
function canVote(age){
    if (age > 18){
        return true
    }
    else{
        return false
    }
}
let P1 = canVote(98);
let P2 = canVote(12)
console.log(P1);
console.log(P2);


// Write an if/else statement that checks if a number is even or odd. If it's even, print "The number is even." Otherwise, print "The number is odd."

function isEven(number){
    if (number % 2 == 0){
        console.log("The number is even");
    }
    else{
        console.log("The number is odd");
    }
}

isEven(2);



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




// Write a function that takes a new object as input which has name , age  and gender and greets the user with their gender (Hi Mr/Mrs/Others harkirat, your age is 21)
function greet(username){
    console.log("Hi Mr. " + username.name + " your age is " + username.age);    
}
let user1name = {
    name: "XYZ",
    age: 99,
    gender: "Male",
};
greet(user1name);

// Also tell the user if they are legal to vote or not.
const user = [{
    name: "ABC",
    age: 10
},{
    name: "XYZ",
    age: 20
}];
function isVote(user){
    for(let i=0; i<user.length; i++){
        if(user[i].age>=18){
            console.log("You are eligible for voting");
        }else{
            console.log("You are not eligible for voting");
        }
    }
}
isVote(user);

// Write a function that takes an array of numbers as input, and returns a new array with only even values. Read about filter in JS.


function getEvenNumbers(arrayOfNumbers){
    return arrayOfNumbers.filter(num => num % 2 === 0);
}
const arrayOfNumbers = [1,2,3,4,5,6,7,8,9,10,11,12,13];
const evenNumbers = getEvenNumbers(arrayOfNumbers);
console.log(evenNumbers);

// Create a function that takes an array of objects as input, and returns the users whose age > 18 and are male

const users=[{
    name:"ABC",
    age:22,
    gender:"male"
},{
    name:"XYZ",
    age:21,
    gender:"female"
},{
    name:"DEF",
    age:17,
    gender:"male"
},{
    name:"PQR",
    age:20,
    gender:"male"
}]

function maleAndAbove18(users){
    return users.age >= 18 && users.gender=="male"
}

function filterMaleAndAbove18(users){
    let arr = users.filter(maleAndAbove18);
    return arr;
}
console.log(filterMaleAndAbove18(users));
