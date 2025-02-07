const express=require("express");
const router=new express.Router()
const userController=require("../Controller/userController")
const adminController=require("../Controller/AdminController")
const carController=require('../Controller/carController')
const jwtMiddileware = require('../Middilewares/jwtMiddileware')
const multerConfig = require('../Middilewares/multerMiddileware')
const BookingController=require('../Controller/BookingController')

router.post("/register",userController.register)
//router.post("/user/login")

// login
router.post("/user/login",userController.login)

// admin login

router.post("/adminlogin",adminController.AdminLogin)

// admin register

router.post("/admin/register",adminController.AdminRegister)


// add car

router.post('/addcar',jwtMiddileware,multerConfig.single('image'),carController.addcars)

// getAllCars
router.get('/adminpanel',jwtMiddileware,carController.getCars)

// users carlist

router.get('/carslist',jwtMiddileware,userController.getCars)

//get single car data

router.get('/booking/:carId',carController.getSinglCars)

// booking
router.post('/booking/mybooking',jwtMiddileware,BookingController.bookingDetails)

// get all booking

router.get('/allbooking',jwtMiddileware,BookingController.getAllBookingdata)

//delete all booking
router.delete('/mybooking/delete/:id',jwtMiddileware,BookingController.deleteBookingdata)

// edit cars

router.put('/editcar/:id',jwtMiddileware,multerConfig.single('image'),carController.editCar)

// adminallBookings
router.get('/bookings',jwtMiddileware,BookingController.bookingHistory)

module.exports=router