const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const JWT_SECRET = "ilovepiratemonkeydluffy";

app.use(express.json())


const users = []


function logger (req, res,next){            //yeh ek logger middleware bnay jo bta raha hai like which req is coming to the server..aur yeh hamare terminal pe btayega ki kaunsa req aa rha hai 
    console.log(req.method + " - Request came !")
    next();
}

app.get("/", function(req, res){            //frontend part ko idhar se connect kr diya like jaise hi localhost:3000 search krenge backend server strt krne ke badd then woh yeh file ko return krega 
    res.sendFile(__dirname + "/public/index.html");
})
