const dotenv = require('dotenv')
const express=require('express')
const app=express()
dotenv.config({
    path:'config.env'
})

app.get('/',(req,res)=>{
    res.send('hello ')
})

app.listen(process.env.PORT,()=>{
    console.log('the app is running on port '+process.env.PORT)
})