const dotenv = require('dotenv')
const express=require('express')
const morgan = require('morgan')
const mongoose =require('mongoose')
const app=express()

//config
dotenv.config({
    path:'config.env'
})

//mongoose
mongoose.connect(process.env.DATABASE_URL).then(
    ()=>{
        console.log(`the app has been connected to db successfully ${process.env.PORT}`)
    }).catch((error)=>{
    console.error(`there is an error in the app ${error}`);
});
//midllwares
app.use(morgan)
//routes
app.get('/',(req,res)=>{
    res.send('hello ')
})

app.listen(process.env.PORT,()=>{
    console.log('the app is running on port '+process.env.PORT)
})