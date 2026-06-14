// Import the Router obejct from the express module to create router handlers
const {Router} = require("express");

// Create a new instance of the router for defining course related routes
const courseRouter = Router();

// Import purchaseModel and courseModel from the database folder to interact with purchase and course data
const {purchaseModel, courseModel} = require("../db");

// Import userMiddleware to authenticate and authorize users before allowing access to routes
const {userMiddleware} = require("../middleware/user");

// Define the GET route for previewing course details without authentication
courseRouter.get("/preview", async function(req,res) {
    // Query the database to get all the courses available for purchase
    const courses = await courseModel.find({});

    // Return the queried course details as a JSON response to the client with a status code
    res.status(200).json({
        courses: courses, // Send the course details back to the client
    });
});

// Export the courseRouter so it can be imported and used in other parts of the application
module.exports = {
    courseRouter: courseRouter
}; 