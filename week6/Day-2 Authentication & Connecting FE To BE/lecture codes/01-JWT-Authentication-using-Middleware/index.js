const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const JWT_SECRET = "pirate_secret_key_monkeydluffy";

app.use(express.json())


const users = []


function logger (req, res,next){            //yeh ek logger middleware bnay jo bta raha hai like which req is coming to the server 
    console.log(req.method + " - Request came !")
    next();
}



app.post("/signup",logger, function(req, res){
    const username = req.body.username;
    const password = req.body.password;


    users.push({
        username:username,
        password:password
    });
    res.json({
        meassage:"Signed in successfully!"
    });
})
