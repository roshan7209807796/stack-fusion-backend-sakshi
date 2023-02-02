require('dotenv').config()
const express= require('express');
const app = express();
const port= process.env.PORT || 5000;

const User = require("./modules/userschema")

app.post("/",(req,res)=>{
    console.log("ok")
    // console.log(req.body)
    // const {name,dob,email,number } = req.body
    // console.log(name)
    // console.log(dob)
    // console.log(email)
    // console.log(number)

})

app.listen(port,()=>{console.log(`server is runing at ${port}`)});

