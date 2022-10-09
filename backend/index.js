const express = require('express');

const app = express()

const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/testt",{useUrlParser:true},()=>console.log("connnected to db"))

//Routes

app.get('/',(req,res)=>{
    res.send('We are on home')
});

app.listen(5000)