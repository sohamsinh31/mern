const mongoose = require('mongoose')

const HotelSchema = new mongoose.Schema({
    title:{
        type:String,
        reqired:true,
        maxlength:60,
    },
    city:{
        type:String,
        reqired:true,
        maxlength:200,
    },
    imgurl:{
        type:String,
        reqired:true,
    },
    district:{
        type:String,
        reqired:true,
        maxlength:200,
    },
    state:{
        type:String,
        reqired:true,
        maxlength:200,
    },
},{timestamps:true});

module.exports =  mongoose.models.Hotel || mongoose.model("Hotel",HotelSchema);