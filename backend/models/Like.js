const mongoose = require('mongoose')

const LikeSchema = new mongoose.Schema({
    foodId:{type:String,required:true},
    userId:{type:String,required:true}
},{timestamps:true});

module.exports = mongoose.models.Like || mongoose.model("Like",LikeSchema);