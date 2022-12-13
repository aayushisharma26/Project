// const mongoose = require('mongoose');
// const express=require('express');
// // const app=express();
// const DB = "mongodb+srv://aayu:aayu14@myname.ukf9sme.mongodb.net/?retryWrites=true&w=majority"
// mongoose.connect(DB,{
//     useNewUrlParser:true,
//     useCreateIndex:true,
//     useUnifiedTopology:true,
//     useFindAndModify:false
// }).then(()=>{
//     console.log("connection done");

// }).catch((err)=>console.log(err,"no connection"));


// const mongoose=require('mongoose')
const mongoose =require("mongoose");
mongoose.connect("mongodb+srv://aayu:aayu14@myname.ukf9sme.mongodb.net/?retryWrites=true&w=majority"
)
.then(()=>{
    console.log('connection');
}).catch((err)=>{
    console.log(err);
})








