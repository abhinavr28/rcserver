const mongoose=require("mongoose")

const bookingSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    }
     ,carid:{
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:"cars",

        },
        startDate:{
            type:Date,
            required:true
            },
            endDate:{
                type:Date,
                required:true
            },
            UserId:{
                type:String,
                required:true,
            },
            totalPrice:{
                type:String,
                required:true
            }
})

const Booking=mongoose.model("Booking",bookingSchema)
module.exports=Booking