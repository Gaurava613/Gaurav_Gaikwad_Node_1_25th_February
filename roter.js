import express from "express";
import UserAuth from "./model.js";

const auth=express.Router()

auth.post('/post',async(req,res)=>{
    const{userName,password}=req.body
    try {
        const findUser= await UserAuth.findOne({userName:userName})
        if(findUser){
            return res.json({message:'this user name is existed'})
        }
        else{
            const user=await UserAuth({userName,password})
            await user.save()
            .then(()=>{
                return res.json({message:'user Signed Up Successfully',data:user})
            })
            .catch((error)=>{
                console.log(error.message+'error while Signed Up')
            })
        }
        
    } catch (error) {
        console.log(error.message+'error....')
    }
})

auth.post('/login',async(req,res)=>{
    const{userName,password}=req.body
    try {
        const findUsername=await UserAuth.findOne({userName:userName})
        if(!findUsername){
            return res.json({message:'invalid user Name'})
        }else{
           
            if(findUsername.password==password){
                return res.json({message:'you logged in successfully',data:findUsername})

            }else{
                return res.json({message:'invalid password , please try again'})

            }
        }
    } catch (error) {
        return res.json({error:error.message+'error is here...'})
    }
})


export default auth;
