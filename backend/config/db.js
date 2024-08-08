const mongoose = require("mongoose");

const connectDB = async (req,res)=>{
    try{
         await mongoose.connect(process.env.MONGODB_URL);
          console.log(`Database is connected`.bgYellow.black)
    }
    catch(error){
        console.log(`Error occured ${error}`.bgRed.white)
    }
};

module.exports = connectDB;