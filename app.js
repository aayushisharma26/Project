const express = require('express');
// const mongoose=require('mongoose')
const app = express();
const connect = require('./config/dbConnect.js');

app.use(express.json());
// app.use("/")

app.listen (3000,()=>{
    // await connect()
    console.log("running on port 3000");
})





