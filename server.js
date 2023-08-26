const dotenv = require("dotenv");
const express = require("express");
const morgan = require("morgan");
const app = express();
const dbConnection=require('./config/dbConfig')
const categoryRouter=require('./routes/categoryRouter');
const ApiError = require("./utils/Errorapi");

//config
dotenv.config({
  path: "config.env",
});

//midllwares
app.use(morgan("dev"));
app.use(express.json());

//db connection 
dbConnection()


//routes
app.use('/api/v1/category',categoryRouter)

//midlware for specific error handlling
app.use((req,res,next)=>{
  next(new ApiError( `we can not find this route now ${req.originalUrl}`,400))
})

//golbal error handling middelware
app.use((err,req,res,next)=>{
  if(err)
  {
    res.status(400).json({err})
  }
 
})

app.listen(process.env.PORT, () => {
  console.log("the app is running on port " + process.env.PORT);
});
