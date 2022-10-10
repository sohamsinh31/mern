const Express = require('express')

const ProductModel = require('../models/Product')

const route = Express.Router()

route.post('/',(req,res)=>{
    async function getData(){
        console.log(req.body)
        try{
            const products = await ProductModel.create(req.body);
            res.status(200).json(products)
        }catch(err){
            res.status(500).json(err)
        }
    }
    getData();
})

route.get('/',async (req,res)=>{
    try{
        //console.log(req.query.hid,"hii")
        const products = await ProductModel.find({hotelid:req.query.hid});
        res.status(200).json(products)
    }catch(err){
        res.status(400).json(err)
        //res.status(500).json(err)
    }
})

route.get('/fetch',async (req,res)=>{
    try{
        //console.log(req.query.hid,"hii")
        const products = await ProductModel.find({_id:req.query.hid});
        res.status(200).json(products)
    }catch(err){
        res.status(400).json(err)
        //res.status(500).json(err)
    }
})

module.exports = route;