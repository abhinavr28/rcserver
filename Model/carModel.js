const mongoose =require('mongoose')

const carSchema = new mongoose.Schema({
    make:{
        type:String,
        required:true
    },
    model:{
        type:String,
        required:true
        },
        year:{
            type:Number,
            required:true
            },
            color:{
                type:String,
                required:true
                },
                pricePerDay:{
                    type:Number,
                    required:true
                    },
                    image:{
                        type:String,
                        required:true
                        }
            

})

const cars = mongoose.model("cars",carSchema)
module.exports = cars