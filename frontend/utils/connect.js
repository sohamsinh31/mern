require('dotenv').config();

import mongoose from "mongoose"

const mongo = async () => mongoose.connect(process.env.NEXT_PUBLIC_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
mongoose.connection.once('open', function(){
    console.log('Conection has been made!');
  }).on('error', function(error){
      console.log('Error is: ', error);
  });
export default mongo;