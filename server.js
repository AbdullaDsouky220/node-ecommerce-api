const dotenv = require("dotenv");
const express = require("express");
const morgan = require("morgan");
const app = express();
const dbConnection=require('./config/dbConfig')
const categoryRouter=require('./routes/categoryRouter')

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

app.listen(process.env.PORT, () => {
  console.log("the app is running on port " + process.env.PORT);
});
