const express = require("express")
const routes = express();
const usersModel = require('../models/usersModel.js');


//TODO - Create a new user - /api/user/signup
routes.post('/signup', async (req, res) => {
    // Validate request
    try{
        const newUser = new usersModel(req.body)
        const user = await newUser.save()
        res.status(201).send(user) 
    }catch(error){
        res.status(400).send(error)
    }
});

//TODO - Login - api/user/login
routes.post('/login', async (req, res) => {
    /*
    if(username == authorisedUser && password == savedPwd){
    res.json({status:true, message:"User Is valid"});
  }else if(username != authorisedUser){
    res.json({status:false, message:"User is invalid"});
  }else if(password != savedPwd){
    res.json({status:false, message:"Password is invalid"});
  }
     */
    try{
        // const {username, password} =  req.body
        const authorisedUser = await usersModel.findOne(req.body)
        if(authorisedUser)
        {
                res.status(200).json({status:true,username:authorisedUser.username,message:"User logged in succesfully!"});
        }else{
            res.status(200).json({status:false,message:"Invalid Username and password"});
        }
    }catch(error){
        res.status(400).send(error)
    }
});

module.exports = routes;