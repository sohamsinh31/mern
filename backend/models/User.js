const mongo = require('mongoose')

const UserSchema = new mongo.Schema({
    phone:{
        type:String,
        reqired:true,
        maxlength:60,
    },
    city:{
        type:String,
        reqired:true,
        maxlength:60,
    },
    district:{
        type:String,
        reqired:true,
        maxlength:60,
    },
    address:{
        type:String,
        reqired:true,
        maxlength:90,
    },
    state:{
        type:String,
        reqired:true,
        maxlength:60,
    },
    pincode:{
        type:String,
        reqired:true,
        maxlength:60,
    },
    uid:{
        type:String,
        reqired:true,
        maxlength:60,
        unique:true
    }
})

module.exports = mongo.models.User || mongo.model("User",UserSchema)