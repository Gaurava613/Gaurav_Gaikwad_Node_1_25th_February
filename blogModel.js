import express from "express";
import mongoose from "mongoose";

const schema=mongoose.Schema({
    title:{
type:String,
require:true
    },
    content:{
        type:String,
        require:true
    },
        author:{
             type: String,
              ref: 'User',
               required: true
             },

},{timestamps:true})
const BlogPost=mongoose.model('Blog',schema)
export default BlogPost;
