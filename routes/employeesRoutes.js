const express = require("express")
const routes = express();
const employeesModel = require('../models/employeeModel.js');

//TODO - List employee list - /api/emp/employees
routes.get('/employees', async(req, res)=>{
        try{
            const employee = await employeesModel.find()
            res.status(200).send(employee)
        }catch(error){
            res.status(400).send(error)
        }
});

//TODO - Create a new employee - /api/emp/employees
routes.post('/employees', async (req, res) => {
    try{
        const newEmp = new employeesModel(req.body)
        const employee = await newEmp.save()
        res.status(201).send(newEmp) 
    }catch(error){
        res.status(400).send(error)
    }
});

//TODO - Retrieve a single employee with userId - /api/emp/employees/{eid}
routes.get('/employees/:eId', async (req, res) => {
    try{
        const foundEmp = await employeesModel.findById(req.params.eId)
        res.status(200).send(foundEmp)
    }catch(error){
        res.status(400).send(error)
    }
});

//TODO - Update an employee with id - /api/emp/employees/{eid}
routes.put('/employees/:eId', async (req, res) => {
    // Validate request
    try{
        const updatedEmp = await employeesModel.findByIdAndUpdate(req.params.eId, req.body)
        res.status(200).send(updatedEmp)
    }catch(error){
        res.status(400).send(error)
    }
    
    //TODO - Write your code here to update the note using noteid
});

//TODO - Delete an employee with eId - /api/emp/employees?eid=xxx
routes.delete('/employees', async (req, res) => {
    try{
        const deletedNote = await noteModel.findByIdAndRemove(req.query.eId)
        res.status(204).send(deletedNote)
    }catch(error){
        res.status(400).send(error)
    }
});





module.exports = routes;