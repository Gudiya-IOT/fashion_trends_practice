const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const morgan = require("morgan");

 const app = express();

PORT = process.env.PORT

const connectDB = require("./config/db")
connectDB()

////////////////////////////////////////////////////// //5/8/24
// app.get("/",(req,res)=>{
//     res.send("hello root")
//     console.log("hyy1")
// });

// const rootroute = require("./routes/rootroute");
// app.use("/fashiontrends",rootroute)
///////////////////////////////////////////////////////////////

const rootroute = require("./routes/rootroute");
app.use("/",rootroute);

const userroute = require("./routes/userroute");
app.use("/fashiontrends",userroute);


app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`.bgBlue.white)
});
