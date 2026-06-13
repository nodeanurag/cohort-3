// Import the Router object from the express module to create route handlers
const {Router} = require("express");

// Create a new instance of Router for defining admin-related routes
const adminRouter = Router();

// Import adminModel and courseModel from the database folder to interact with admin and course data
const {adminModel} = require("../db");

const{adminMiddleware} = require ("../middleware/admin")
// Import the required dependencies 
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const z = require("zod");
const {JWT_ADMIN_PASSWORD} = require("../config")

adminRouter.post("/signup", async function(req, res){      

    // Input validation using zod 
    const requiredBody = z.object({
        email: z.string().email().min(5), // Email must be a valid format and at least 5 characters
        password: z.string().min(5), // Password must be at least 5 characters
        firstName: z.string().min(3), // First name must be at least 3 characters
        lastName: z.string().min(3), // Last name must be at least 3 characters
    });

    // Parse the request body using the requireBody.safeParse() method to validate the data format
    // "safe" parsing (doesn't throw error if validation fails)
    const parsedDataSuccess = requiredBody.safeParse(req.body);         

    //If data is not correct then yeh response return kr do
    if(!parsedDataSuccess.success){                     
        return res.json({
            message: "Incorrect Format",
            error: parsedDataSuccess.error
        })
    }

    // Extract validated email, password, firstName, and lastName from the request body
    const {email, password, firstName, lastName} = req.body;

    // Hash the user's password using bcrypt with a salt rounds of 5
    const hashedPassword = await bcrypt.hash(password, 5)
    
    // Creating a new user in the database
    try{
        // Create a new user entry with the provided email, hashed password, firstName, lastName
        await adminModel.create({
            email,
            password: hashedPassword,
            firstName,
            lastName,   
        });
    } catch(e){
        // If there is an error during user creation, return a error message
        return res.status(400).json({
            // Provide a message indicating signup failure
            message: "You are already signup",
        });
    }
    // Send a success response back to client indicating successfully singup
    res.json({
        message: "Sign-up Successfull"
    });
});