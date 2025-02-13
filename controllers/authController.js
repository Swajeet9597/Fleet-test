const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const { json } = require("express");
const jwt = require("jsonwebtoken")

const checkLogin = async(req,res)=>{
    try {
        


    } catch (error) {
        console.log(error);
    }
}

const addUser = async(req,res)=>{
 try {
    
     const {name,email,password} = req.body;
     
     const existingUser = await User.findOne({ Email: email });
     
     console.log(existingUser);
     
     if (existingUser) {
         return res.status(400).json({ success: false,
            data: "User already exists" });
        }
        
        
        const encryptedPass = await bcrypt.hash(password,10)
        
        
        let user = new User ({
            Name: name,
            Email: email,
            Password: encryptedPass
        })
        
        user.save()
        
        
        res.status(200).json({
            success: true,
            data: "User created successfully"
        })
    } catch (error) {
       console.log(error);
    }
}

const checkUser = async(req,res)=>{

    try {

        console.log(req.body);
        const {email,password} = req.body;

        const userExist = await User.findOne({Email:email})
        console.log(userExist);
        if(!userExist){
    //  console.log("This email is not regestered55555555");
           return res.status(400).json({
                msg:"This email is not regestered",
                success: false
            })
        }

        const decryptedPass = await bcrypt.compare(password, userExist.Password)

        if(decryptedPass){

            const tokenData ={
                _id:userExist._id,
                email: userExist.Email,
                name: userExist.Name
            }

            const token = await jwt.sign(tokenData,'scsdhbvhjse',{expiresIn: 60*60*5})

            const tokenOption = {
                httpOnly: true,
                sameSite:"lax",
                secure: false
            }

            return res.cookie("token",token,tokenOption).status(200).json({
                success: true,
                msg:"User log in successfully...",
                data:token
            })
        }else{
            return res.status(400).json({
                success:false,
                msg:"Password is incorrect..."
            })
        }



        
        
    } catch (error) {
        console.log(error);
    }

}

const getUsers = async(req,res)=>{
    try {
        res.status(400).json({
            msg:"User not found"
        })
    } catch (error) {
        
    }
}

module.exports = {addUser,checkUser,checkLogin,getUsers}