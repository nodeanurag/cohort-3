const express = require("express");
const {userModel, todoModel} = require("./db");
const jwt = require("jsonwebtoken");
const jwtSecret = "shivajitheboss";
const mongoose = require("mongoose");

const app = express();
 mongoose.connect("mongodb+srv://username:password@cluster0.76azs3u.mongodb.net/todo-app")
const app = express();
app.use(express.json());


app.post("/signup", async function(req, res){
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    await userModel.create({
        email: email,
        password: password,
        name: name
    });
    res.json({
        message: "user created"
    })
});

app.post("/signin", async function (req, res){
    const email = req.body.email;
    const password = req.body.password;

    const user = await userModel.findOne({email: email, password: password});
    if (user){
        const token = jwt.sign({id: user._id.tostring()}, jwtSecret);

        res.json({token: token});

    }
    else{
        res.status(403).json({
            message: "invalid credentials"
        })
    }
});

app.post("/todo",async function(req, res){
    const userId =req.body.userId;
    const title = req.body.title;
    const done = req.body.done;
    await TodoModel.create({
        title, userId, done
    });
    res.json({
        message: "todo created"
    })

});
