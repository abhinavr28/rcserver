const Admin = require("../Model/AdminModel")
const jwt=require("jsonwebtoken")


exports.AdminRegister=async(req,res)=>{
    const{email,password}=req.body
    try{
        const existingAdmin=await Admin.findOne({email})
        if(existingAdmin){
            res.status(406).json("this email is already registered")
        }else{
            const newAdmin=new Admin({email,password})
            await newAdmin.save()
            res.status(200).json(newAdmin)
        }
    }catch{

    }
}


exports.AdminLogin=async(req,res)=>{
    const{email,password}=req.body
    console.log("inside admin controller");
    try{
        const existingAdmin= await Admin.findOne({email,password});
        console.log(existingAdmin);
        if(existingAdmin){
            //    generate token
            const token= jwt.sign({AdminId:existingAdmin._id},process.env.JWT_SECRET)
            res.status(200).json({existingAdmin,token})
            }else{
               res.status(406).json("invalid email/password")
            }
            }catch(err){
        
               res.status(401).json(err) 
        
            }
}

