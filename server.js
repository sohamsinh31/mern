const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql2");
require('dotenv').config()

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))

const db = mysql.createPool({
    host:String(process.env.NEXT_PUBLIC_HOST),
    user:String(process.env.NEXT_PUBLIC_USER),
    password:String(process.env.NEXT_PUBLIC_PASSWORD),
    database:String(process.env.NEXT_PUBLIC_DATABASE),
    port:"3306"
})

app.listen(5000,()=>{
    console.log("server is running")
})

app.get("/",(req,res)=>{
    const q = "SELECT * FROM contects";
    db.query(q,(e,r)=>{
       console.log(e);
        console.log(r);
    })
    res.send("Hello world!");
})