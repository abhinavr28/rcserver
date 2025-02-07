const mongoose=require("mongoose")
const connectionString=process.env.DATABASE


mongoose.connect(connectionString).then(()=>{
    console.log("Mongodb atlas successfully connected with rcserver ");
}).catch((err)=>{
    console.log("mongodb connection error",err);
})