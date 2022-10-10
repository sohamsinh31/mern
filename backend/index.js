const express = require('express');

const app = express()

const mongoose = require('mongoose')

const BodyParser = require('body-parser')

const Hotel = require('./routes/Hotel')

const Product = require('./routes/Product')

const Like = require('./routes/Like')

const cors = require('cors')

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

app.get('/',(req,res)=>{
    res.send('We are on home')
});

app.listen(5000)