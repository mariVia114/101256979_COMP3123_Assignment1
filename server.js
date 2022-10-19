const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const empRoutes = require("./routes/employeesRoutes.js")
const userRoutes = require("./routes/usersRoutes.js")
const SERVER_PORT = 8081
const DB_CONNECTION_STRING = "mongodb+srv://marie:vianca0410@cluster0.cmkzudn.mongodb.net/comp3123_assignment1?retryWrites=true&w=majority"
const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

mongoose.Promise = global.Promise;

// TODO - Update your mongoDB Atals Url here to Connect to the database
mongoose.connect(DB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database mongoDB Atlas Server");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});
app.use('/api/user/', userRoutes);
app.use('/api/emp/', empRoutes);
app.get('/', (req, res) => {
    res.send("<h1>Welcome to Full Stack Assignment 1</h1>");
});
app.listen(SERVER_PORT, () =>{
    console.log(`Server running at http://localhost:${SERVER_PORT}/`)
})