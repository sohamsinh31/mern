const express = require('express');

const session = require("express-session")

const app = express()

const mongoose = require('mongoose')

const BodyParser = require('body-parser')

const Hotel = require('./routes/Hotel')

const Product = require('./routes/Product')

const Like = require('./routes/Like')

const User = require('./routes/User')

const cors = require('cors')

const oneDay = 1000 * 60 * 60 * 24;

//Connect to mongo db
mongoose.connect("mongodb://localhost:27017/testt",()=>console.log("connnected to db"));
mongoose.connection.once('open', function(){
    console.log('Conection has been made!');
  }).on('error', function(error){
      console.log('Error is: ', error);
  });

//Routes

app.use(BodyParser.json())

app.use(cors())

app.use('/product',Product)

app.use('/like',Like);

app.use('/hotel',Hotel);

app.use('/user',User)

app.use(session({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized:true,
    cookie: { maxAge: oneDay },
    resave: false
}));

app.get('/session',(req,res)=>{
    req.session?.phoneNumber?(
        res.send(req.session.phoneNumber)
    ):(res.send({"error":"No user id found"}))
})

app.post('/session',(req,res)=>{
    req.session.phoneNumber = req.body.phone
    req.session.address = req.body.address
    req.session.city = req.body.city
    req.session.pincode = req.body.pincode
    req.session.district = req.body.district
    req.session.state = req.body.state
    console.log(req.body)
    res.send(req.session)
})

app.get('/',(req,res)=>{
    res.send('We are on home')
});

app.listen(5000)