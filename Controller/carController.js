const { json } = require('express')
const cars = require('../Model/carModel')


// addcars

exports.addcars= async(req,res)=>{
    console.log("inside car controller fn")
    const{make,model,year,color,pricePerDay}=req.body
    const image = req.file.filename
    const adminId = req.playload
    // console.log(make,model,year,color,pricePerDay,image,adminId)
    // res.status(200).json("add cars request recived")
    try{
        const existingCar = await cars.findOne({model})
        if(existingCar){
            return res.status(400).json("car already exist")
            }
            const newCar = await cars.create({make,model,year,color,pricePerDay,image,adminId})
            await newCar.save()
            res.status(200).json(newCar)
    }catch(err){
        res.status(401).json(err)
    }
}


// home cars

exports.getCars = async(req,res)=>{
    try{
        const allCars = await cars.find()
        res.status(200).json(allCars)
    }catch(err){
        res.status(401).json(err)
    }
}



// // get single  cars details.


exports.getSinglCars = async(req,res)=>{
    console.log("inside of single car details");
    const {carId} =req.params
    console.log(carId);
 
    try{
        const singleDetails = await cars.find({_id:carId})
        res.status(200).json(singleDetails)
    }catch(err){
        res.status(401).json(err)
    }
}

//  Edit Car

exports.editCar = async(req,res)=>{
    console.log("inside edit controller");
    const {id}=req.params
    const adminId=req.playload
      const {make,model,year,color,pricePerDay,image}=req.body

    const images = req.file?req.file.filename:image
    
  
    

 try{
     
      const editdetails=await cars.findOneAndUpdate({_id:id},{
        make,model,year,color,pricePerDay,image:images,adminId
    },{new:true})

      await  editdetails.save()
      res.status(200).json(editdetails)

 }catch(err){
    res.status(401).json(err)
 }
  

}