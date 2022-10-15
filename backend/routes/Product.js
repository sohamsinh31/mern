const Express = require('express')

const ProductModel = require('../models/Product')

const LikeModel = require('../models/Like')

const { default: mongoose } = require('mongoose')

const route = Express.Router()

const db = require('../Connection/connect')

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

route.get('/test', async (req,res)=>{
    try{
        //console.log(req.query.hid)
        //const data = await ProductModel.find({_id:await LikeModel.find({userId:req.query.hid},{foodId:1,_id:0})})
        console.log(await LikeModel.findOne({userId:req.query.hid},{foodId:1,_id:0}).foodId)
        ProductModel.aggregate
        //res.status(200).json(data)
    }catch(err){
        res.status(400).json(err)
        //res.status(500).json(err)
    }
})

module.exports = route;