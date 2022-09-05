const express = require("express");
const app2 = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql2");
require('dotenv').config()
const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const hostname = 'localhost'
const port = 3000

const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()

app.prepare().then(() => {
    createServer(async (req, res) => {
      try {
        // Be sure to pass `true` as the second argument to `url.parse`.
        // This tells it to parse the query portion of the URL.
        const parsedUrl = parse(req.url, true)
        const { pathname, query } = parsedUrl
  
        if (pathname === '/a') {
          await app.render(req, res, '/a', query)
        } else if (pathname === '/b') {
          await app.render(req, res, '/b', query)
        } else {
          await handle(req, res, parsedUrl)
        }
      } catch (err) {
        console.error('Error occurred handling', req.url, err)
        res.statusCode = 500
        res.end('internal server error')
      }
    }).listen(port, (err) => {
      if (err) throw err
      console.log(`> Ready on http://${hostname}:${port}`)
    })
  })

app2.use(cors())
app2.use(express.json())
app2.use(bodyParser.urlencoded({extended:true}))

// const db = mysql.createPool({
//     host:String(process.env.NEXT_PUBLIC_HOST),
//     user:String(process.env.NEXT_PUBLIC_USER),
//     password:String(process.env.NEXT_PUBLIC_PASSWORD),
//     database:String(process.env.NEXT_PUBLIC_DATABASE),
//     port:"3306"
// })

app2.listen(process.env.PORT,()=>{
    console.log("server is running")
})

app2.get("/",(req,res)=>{
    // const q = "SELECT * FROM contects";
    // db.query(q,(e,r)=>{
    //    console.log(e);
    //     console.log(r);
    // })
    res.send("Hello world!");
})

app2.post("/api/gett",(req,res)=>{
    // const q = "SELECT * FROM contects";
    // db.query(q,(e,r)=>{
    //    console.log(e);
    //     console.log(r);
    // })
    res.send(req.body.first);
})