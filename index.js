const express = require('express')
const mongoose = requiure('mongoose')
const connectDB = require('./db')
const router = express.Router()
const app = express()
require('dotenv').config()


app.use(express.json())

const userSchema = new mongoose.Schema({
    longUrl: { 
        type : String,
        required : true,
        validate: {
            validator: function (url) {
                return /^https?:\/\/.+/.test(url)
            },
            message: "URL must start with http:// or https://"
        }
        
    },
    shortCode: {
        type: String,
        required: true,
        unique: true
    },
    clicks : {
        type: Number,
        default: 0,
        trim: true

    }
}, { timestamps: true} )


const shorten = (req, res) => {
    
    
}


 router.post("/shorten", shorten)

 app.use("/api", router)

 connectDB()

 app.get("/", (req,res) => {
    res.send("Server khaint running te a baiji")
 })

app.listen(3000, ()=> {
    console.log('Server is running on port 3000')
})