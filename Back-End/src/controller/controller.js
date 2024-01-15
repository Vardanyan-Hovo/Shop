import express from 'express';
import {Users} from "../bd/data.js"

const router = express.Router();


//returns data to Users
router.get("/data", async (req, res) => {
    return res.send(Users);
});

// Define a GET route to retrieve user data by ID
router.get('api/credentials/user/:email', (req, res) => {
    const userEmail = req.params.email; // Access the user ID from request parameters

    const user = Users.find((user) => user.email === userEmail);

    if (!user)
        res.send(null);

    // Here you would typically fetch user data based on the provided Email from a database or another source
    // For example, assuming some user data is fetched based on userEmail
    const userData = {
    id: user.id,
    name: user.name,
    type : user.type,
    email : userEmail
    };

    // Send the user data as a JSON response
    res.send(userData);
});

// Define a GET route to retrieve user data by ID
router.get('/api/user/:id', (req, res) => {
    const userId = req.params.id; // Access the user ID from request parameters

    const user = Users.find((user) => user.id === userId);

    if (!user)
        res.send(null);

    // Here you would typically fetch user data based on the provided ID from a database or another source
    // For example, assuming some user data is fetched based on userId
    const userData = {
    id: userId,
    name: user.name,
    type : user.type,
    email : user.email
    };

    // Send the user data as a JSON response
    res.send(userData);
});
  
  
//change user by id
router.put('/api/user/:id', (req, res) => {
    const userId = req.params.id; // Access the user ID from request parameters

    const user = Users.find((user) => user.id === userId);

    if (!user)
        res.send(null);

    user.name = req.body;
    user.type = req.type;
    user.email = req.email;

    if (!req.name || !req.password || !req.type || !req.email)
    {
    return  res.status(400).json({ message: `received user not create db` });
    }
    // Send the user data as a JSON response
    res.send(user);
});


// delete user for db
router.delete('/api/user/:id', (req, res) => {
    // Access the user ID from request parameters
    const userId = parseInt(req.params.id); 

    // Find the index of the user with the provided ID in the users array
    const index = Users.findIndex((user) => user.id === userId);

    if (index === -1)
    res.status(404).json({ message: `User with ID ${userId} not found` });

    // Remove the user from the users array if found
    Users.splice(index, 1);
    // Send the user data as a JSON response
    res.status(200).json({ message: `User with ID ${userId} deleted successfully` });
});

export default router;