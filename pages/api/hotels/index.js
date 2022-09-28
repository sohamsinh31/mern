import mongo from '../../../utils/connect';
import Hotel from '../../../models/Hotel';

export default async function handler(req, res) {
    await mongo();
    if(req.method=='POST'){
        try{
            const product = await Hotel.create(req.body);
            res.status(201).json(product)
        }catch(err){
            res.status(500).json(err);
        }
    }
    if(req.method=='GET'){
        try{
            const products = await Hotel.find();
            res.status(200).json(products)
        }catch(err){
            res.status(500).json(err)
        }
    }
  }