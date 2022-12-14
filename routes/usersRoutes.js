const express = require("express")
const bcrypt = require("bcrypt");
const routes = express();

const usersModel = require('../models/usersModel.js');
routes.post("/signup", async (req, res) => {
    const body = req.body;

    if (!(body.email && body.password)) {
      return res.status(400).send({ error: "Data not formatted properly" });
    }

    // creating a new mongoose doc from user data
    const user = new usersModel(body);
    // generate salt to hash password
    const salt = await bcrypt.genSalt(10);
    // now we set user password to hashed password
    user.password = await bcrypt.hash(user.password, salt);
    user.save().then((doc) => res.status(201).send(doc));
  });

  // login route
  routes.post("/login", async (req, res) => {
    const body = req.body;
    const user = await usersModel.findOne({ username: body.username });
    if (user) {
      // check user password with hashed password stored in the database
      const validPassword = await bcrypt.compare(body.password, user.password);
      if (validPassword) {
            res.status(200).json({status:true,username:user.username,message:"User logged in succesfully!"});
      } else {
            res.status(200).json({status:false,message:"Invalid Username and password"});
      }
    } else {
      res.status(400).json({ error: "User does not exist" });
    }
  });

module.exports = routes;