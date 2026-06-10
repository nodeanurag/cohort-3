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
