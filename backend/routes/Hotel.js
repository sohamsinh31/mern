const Express = require('express')

const HOtelModel = require('../models/Hotel')

const route = Express.Router()

route.post('/',(req,res)=>{
    async function getData(){
        console.log(req.body)
        try{
            const products = await HOtelModel.create(req.body);
            res.status(200).json(products)
        }catch(err){
            res.status(500).json(err)
        }
    }
    getData();
})

route.get('/',(req,res)=>{
    async function getData(){
    try{
        const products = await HOtelModel.find();
        res.status(200).json(products)
    }catch(err){
        res.status(500).json(err)
    }
}
getData();
})

route.get('/hotel',(req,res)=>{
    res.send('We are on posts hotel')

})

module.exports = route;