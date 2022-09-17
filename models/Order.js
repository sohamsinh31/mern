import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
    customer:{
        type:String,
        reqired:true,
        maxlength:60,
    },
    address:{
        type:String,
        reqired:true,
        maxlength:200,
    },
    total:{
        type:Number,
        reqired:true,
    },
    status:{
        type:Number,
        default:0,
    },
    method:{
        type:Number,
        required:true
    },
},{timestamps:true});

export default mongoose.models.Order || mongoose.model("Order",OrderSchema);