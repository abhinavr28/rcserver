const Booking=require("../Model/BookingModel");
const { findByIdAndDelete } = require("../Model/userModel");



exports.bookingDetails = async (req, res)=>{
    console.log("Inside the Booking Controller")
    const {username,carid,startDate,endDate,totalPrice}=req.body
    console.log(username,carid,startDate,endDate,totalPrice);
    const UserId=req.playload
    console.log(UserId)

    try{
        const booking=new Booking({username,carid,startDate,endDate,totalPrice,UserId});
        await booking.save();
        res.status(200).json("Booking Successful")
        }catch(err){
            res.status(400).json(err)
            
        
    }
}

exports.getAllBookingdata=async(req,res)=>{
    console.log('inside getallbookings')
    const UserId=req.playload;
  
    console.log(UserId);
    try{
        const result=await Booking.find({UserId}).populate("carid")
        res.status(200).json(result)
    }catch(err){
        res.status(500).json(err)
    }
}
exports.deleteBookingdata=async(req,res)=>{
    console.log("inside delete Controlling")
    const {id}=req.params

    try{

        const result=await Booking.findByIdAndDelete({_id:id});

        res.status(200).json(result)

    }catch(err){
        res.status(401).json(err)
    }
}

// admin all booking

exports.bookingHistory=async(req,res)=>{
    console.log('inside getallbookings')

    try{
        const result=await Booking.find().populate("carid")
        res.status(200).json(result)
    }catch{
        res.status(500).json(err)
    }
}