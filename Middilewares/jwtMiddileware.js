const jwt = require('jsonwebtoken')

const jwtMiddileware = (req,res,next)=>{
    console.log("inside jwtMiddileware fn");
   try{
    const token = req.headers['authorization'].split(" ")[1]
    console.log(token);
    if(token){
        const jwtResponse=jwt.verify(token,process.env.JWT_SECRET);
        req.playload=jwtResponse.userId
        next()
    }else{
        res.status(401).json({message:"unauthorized user"})
    }
}catch{
    res.status(401).send("unauthorized")
} 
}



module.exports = jwtMiddileware