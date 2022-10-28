const Express = require('express')

const UserModel = require('../models/User')

const route = Express.Router()

route.get('/',async (req,res)=>{
    console.log(req.query.uid)
    const all = await UserModel.find({uid:req.query.uid})
    //console.log(all)
    res.status(200).json(all)
})

route.post('/',async (req,res)=>{
    try{
    const all = await UserModel.create(req.body)
    res.status(200).json(all)
    }catch(err){
        if(err){
          const all = await UserModel.updateOne({uid:req.body.uid},req.body)
          res.status(200).json(all)
        }
        else{
        res.status(500).json(err)
        }
    }
})

module.exports = route;

