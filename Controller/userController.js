const user = require('../Model/userModel')
const jwt = require('jsonwebtoken')
const cars = require('../Model/carModel')



//register

exports.register=async(req,res)=>{
    const{username,email,password}=req.body
    try{
console.log("inside register controller");
    const existingUser = await user.findOne({email})
    console.log(existingUser);

    if(existingUser){
        res.status(406).json("user already exist!!please login")
    }else{
        const newuser=new user({
            username,
            email,
            password
        })
        await newuser.save()
        res.status(200).json(newuser)
    }
    }catch(err){

       res.status(401).json(err) 

    }
}

// login

exports.login=async(req,res)=>{
    const{email,password}=req.body
    try{
        console.log("inside register controller");
            const existingUser = await user.findOne({email,password})
          ;
        
            if(existingUser){
            //    generate token
            const token= jwt.sign({userId:existingUser._id},process.env.JWT_SECRET)
            res.status(200).json({existingUser,token})
            }else{
               res.status(406).json("invalid email/password")
            }
            }catch(err){
        
               res.status(401).json(err) 
        
            }
}

// user cars

exports.getCars = async(req,res)=>{
    try{
        const allCars = await cars.find()
        res.status(200).json(allCars)
    }catch(err){
        res.status(401).json(err)
    }
}
