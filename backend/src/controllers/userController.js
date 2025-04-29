import { configDotenv } from "dotenv";
configDotenv()
import axios from 'axios'
import mongoose from "mongoose";
import multer from "multer";
import User from "../models/User.js";
import Mentor from "../models/Mentor.js";
import e from "express";


export const students = async (req,res)=>{
     try {
        const allStudents = await User.find({role:'student'})
        if(!allStudents){return res.json({msg:'No studens found!!'})}
        res.status(200).json({allStudents:allStudents})
     } catch (error) {
        res.status(500).json({err:error})
     }
}

export const mentors = async (req,res)=>{
    try {
        const allMentors = await Mentor.find()
        if(!allMentors){return res.json({msg:'No mentors found'})}
        res.status(200).json({allMentors:allMentors})
    } catch (error) {
        res.status(500).json({err:error})
    }
}

export const singleMentor = async (req,res)=>{
    try {
        const id = (req.params._id)
        const mentor = await Mentor.findById({_id:id})
        res.status(200).json({mentor})
        
    } catch (error) {
        res.status(500).json({err:error})
    }
}

export const edit = async(req,res)=>{
    try {
        const id= (req.params._id)
        const user = await User.findById({_id:id})
        if(!user){
            user = await Mentor.findById({_id:id})
        }
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({err:error})
    }
}

export const personalInfo= async(req,res)=>{
     const userId = (req.params._id)
    try {
        let pInfo = await User.findByIdAndUpdate(userId,req.body)
        if(!pInfo){
            pInfo = await Mentor.findByIdAndUpdate(userId,req.body)
        }
        console.log(pInfo);
        res.status(200).json({msg:"information added"})
        
    } catch (error) {
        res.status(500).json({err:error})
    }
}

export const topic = async (req,res)=>{
    const id = (req.params._id)
    try {
        const lessons = await Mentor.findByIdAndUpdate(id,req.body)
        res.json({msg:lessons})
    } catch (error) {
        console.log(error);
        
    }
}
export const singleUser = async (req,res)=>{
    try {
        const id = (req.params._id)
        let singleUser = await User.findById({_id:id})
        if(!singleUser){
              singleUser = await Mentor.findById({_id:id})
        }
        res.status(200).json({msg:singleUser})
    } catch (error) {
        res.status(500).json({err:error})
    }
}

export const sug = async (req,res)=>{
    try {
        const id = req.params._id
        const user = await User.findById({_id : id})

        const requestData ={
            user_id: id,
            skills : user.skills
        }
        // const groqResponse = await axios.post(
        //     process.env.GROQ_RECOMMENDATION_API, 
        //     requestData,
        //     { headers: { Authorization: `Bearer ${process.env.GROQ_API_KEY}` } }
        //   );
        //   console.log(groqResponse);
          
        //   return res.json(groqResponse.data);
      
        const skill = user.skills
        // console.log(sk);

        const m = await Mentor.find({role:"mentor"})
        // console.log(m);
        // m.map((item)=>(
            
        //     // console.log(item.skills)
            
        // ))
        
        // const filter = {role:"student"} ? { skills: { $in: sk } } : {}; 
        const ment = await Mentor.find({skills:{$in :skill}})
        // const ment = await User.find(filter)

        res.json({data:ment})
    } catch (error) {
        res.json({err:error})
        console.log(error);
        
    }
}
// export const skillDetails = async (req,res)=>{
//     const {skillsdetails} = req.body
//     try {
//         let skillsAdd = await Mentor.findOne({skill_discription:skillsdetails})
//         skillsAdd =  await Mentor({
//             skill_discription:skillsdetails
//         })
//         await skillsAdd.save()
//     } catch (error) {
//         console.log(error);
        
//     }
// }

export const skillDelete = async (req,res)=>{
    const id = req.params._id
    try {
        let user = await User.findOneAndDelete(id,req.body)
        if(!user){
            user = await Mentor.findOneAndDelete(id,req.body)
        }
        res.status(200).json({msg:user})
    } catch (error) {
        res.status(500).json({err:error})
    }
}

export const deleteUser = async (req,res)=>{
    const id = (req.params._id)
    try {
        let user = await User.findByIdAndDelete(id)
        if(!user){
            user =await Mentor.findByIdAndDelete(id)
        }
        res.status(200).json({msg:"user deleted"})
    } catch (error) {
        res.status(500).json({err:error})
    }
}
  
export const logOut = async (req,res)=>{
   const {access_token,refresh_token}=req.body
   try {
    //    const blackList
   } catch (error) {
       console.log(error);
       
   }
}

export const Chats = async (req,res)=>{
    try {
        const id = req.params._id
        let user = await User.findByIdAndUpdate(id,req.body)
        if(!user){
               user=await Mentor.findByIdAndUpdate(id,req.body)
        }
        if(!user){
            return res.json({msg:"User not found"})
        }
        res.status(200).json({msg:user})
        
    } catch (error) {
        console.log(error);
        res.status(500).json({error})
        
    }
}

export const selectedMentors = async (req,res)=>{
    try {
        const idss = req.body
        console.log(idss);
        
        // const {ObjectId}=mongoose.Types;
        const rawIds = [{ id:"6810a9f870a953c354fdc8bd"}];

const ids = rawIds.map(obj => obj.id);
        const mentors = await Mentor.find({ _id: { $in: ids.map(id => new mongoose.Types.ObjectId(id)) } })
        res.status(200).json({msg:mentors})
    } catch (error) {
        console.log(error);
        
    }
}

export default {students , mentors , singleMentor, personalInfo , topic , singleUser,sug,edit,Chats,selectedMentors}   