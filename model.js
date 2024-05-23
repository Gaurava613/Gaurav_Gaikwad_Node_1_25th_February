import express from "express";
import mongoose from "mongoose";

const schema=mongoose.Schema({
    userName:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:Number,
        require:true 
    }
});

const UserAuth=mongoose.model('UserAuth',schema);
export default UserAuth;