const connection = async() => mongoose.connect("mongodb://localhost:27017/testt",{useUrlParser:true},()=>console.log("connnected to db"));
module.exports = connection;