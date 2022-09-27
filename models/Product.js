import mongoose from "mongoose";

const ProocuctSchema = new mongoose.Schema({
    title:{
        type:String,
        reqired:true,
        maxlength:60,
    },
    hotelid:{
        type:String,
        reqired:true,
        maxlength:60,
    },
    desc:{
        type:String,
        reqired:true,
        maxlength:200,
    },
    img:{
        type:String,
        reqired:true,
    },
    prices:{
        type:[Number],
        required:true
    },
    extraOptions:{
        type:[{text:{type:String,required:true},price:{type:Number,required:true}}]
    }
},{timestamps:true});

export default mongoose.models.Product || mongoose.model("Product",ProocuctSchema);