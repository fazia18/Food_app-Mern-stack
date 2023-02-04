const express=require("express");
const cors=require("cors");
const dotenv=require("dotenv").config();
const mongoose=require("mongoose");
const authController = require("./controllers/authController");
const productController = require("./controllers/productController");
const uploadController = require("./controllers/uploadController");
const app=express();


mongoose.set('strictQuery', false);
mongoose.connect(process.env.Mongo_URL, ()=>
console.log("Db connected successfully")
);


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use("/auth", authController)
app.use("/product", productController)
app.use("/upload", uploadController)


app.listen(process.env.PORT || 5000,()=>{
    console.log("connected to port successfully")
});