import mongo from '../../../utils/connect';
import Product from '../../../models/Product';

export default async function handler(req, res) {
    await mongo();
    if(req.method=='POST'){
        try{
            //console.log(req.body)
            const product = await Product.create(req.body);
            res.status(201).json(product)
        }catch(err){
            res.status(500).json(err);
        }
    }
    if(req.method=='GET'){
        try{
            //console.log(req.body.hid)
            const products = await Product.find({hotelid:req.body.hid});
            res.status(200).json(products)
        }catch(err){
            res.status(500).json(err)
    }
    if(req.method=='PUT'){
        try{
            console.log(req.body)
            const products = await Product.updateOne({hotelid:req.body.hid},{$set:{health:[req.body.health]}});
            res.status(200).json(products)
        }catch(err){
            res.status(500).json(err)
        }
    }
    if(req.method=='DELETE'){
        try{
            const products = await Product.deleteMany({});
            res.status(200).json(products)
        }catch(err){
            res.status(500).json(err)
        }
    }
  }
}