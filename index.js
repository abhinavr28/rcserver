require (`dotenv`).config()

const express = require (`express`)

const cors = require(`cors`)
const router=require("../rcserver/Router/Router")
require("./DB/connection")



const rcserver = express()

// data sharing
rcserver.use(cors())

// parse  json 
rcserver.use('/uploads',express.static('./uploads'))
rcserver.use(express.json())

rcserver.use(router)

const PORT = 3000 || process.env.PORT

rcserver.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})
rcserver.get('/',(req,res)=>{
    res.send('hello world')
})

