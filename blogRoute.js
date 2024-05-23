import express from "express";
import BlogPost from "./blogModel.js";

const blog=express.Router()

blog.post('/blog',async(req,res)=>{
    const{title,content,author}=req.body
    try {
        const addBlog=await BlogPost({title,content,author})
        await addBlog.save()
        .then(()=>{
            return res.json({message:'blog crated',data:addBlog})
        })
        .catch((error)=>{
            return res.json({error:error.message+'error while creating blog'})
        })
    } catch (error) {
        return res.json({error:error.message+'error is here..'})
    }
})
export default blog;

