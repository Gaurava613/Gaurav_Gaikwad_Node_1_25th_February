import express from "express";
import mongoose from "mongoose";
import dotenv from'dotenv'
import auth from "./roter.js";
import blog from "./blogRoute.js";

const app=express()
dotenv.config()
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log('DB Connected')
})
.catch((error)=>{
    console.log(error.message+'DB not connected')
})
app.use(express.json())
app.use(auth)
app.use(blog)
app.listen(process.env.PORT,()=>
console.log(`server is running on PORT ${process.env.PORT}`)
)

export default app;


