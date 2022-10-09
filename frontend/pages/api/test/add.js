// import { connect } from '..';
import mongo from '../../../utils/connect';
import Test from '../../../models/testModel';

/**
 * 
 * @param {import('next').NextApiRequest} req 
 * @param {import('next').NextApiResponse;} res 
 */
export default async function addtest(req,res){
try{    const {name,email} =req.body;
    console.log('connecting mongo')
    await mongo();
    console.log('connected mmongo')
    console.log('connected mmongo')
    const test = await Test.create(req.body)
    console.log('created document')
    res.json({test})
}
catch(error){
    console.log(error)
res.json({error})
}
}