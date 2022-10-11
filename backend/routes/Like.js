const Express = require('express')

const LikeModel = require('../models/Like')

const Productmodal = require('../models/Product')

const route = Express.Router()

route.post('/',(req,res)=>{
    async function getData(){
        console.log(req.body)
        try{
            const products = await LikeModel.create(req.body);
            res.status(200).json(products)
        }catch(err){
            res.status(500).json(err)
        }
    }
    getData();
})

route.get('/get',async (req,res)=>{
    try{
        //console.log(req.query.user)
        const products = await LikeModel.find({userId:req.query.user});
        res.status(200).json(products)
        //console.log(products.length)
    }catch(err){
        res.status(400).json(err)
        res.status(500).json(err)
    }
})

route.get('/',async (req,res)=>{
    try{
        //console.log(req.query.user,req.query.food)
        const products = await LikeModel.find({userId:req.query.user,foodId:req.query.food});
        res.status(200).json({"status":products.length>0?true:false})
        //console.log(products.length)
    }catch(err){
        res.status(400).json(err)
        res.status(500).json(err)
    }
})

route.delete('/', async (req,res)=>{
    try{
        console.log(req.query.user,req.query.food)
        const like = await LikeModel.deleteOne({userId:req.query.user,foodId:req.query.food})
        res.status(200).json({"status":false})
    }
catch(err){
    res.status(400).json(err)
    res.status(500).json(err)
}
})

module.exports = route;