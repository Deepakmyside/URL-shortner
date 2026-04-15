const express = require('express')
const mongoose = require('mongoose')
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


const shorten = async (req, res) =>{
    try {
         const { longUrl} = req.body
         const shortCode = Math.random().toString(36).substring(2, 8)
                  
         const newUrl = await Url.create({
            longUrl,
            shortCode

         })

        

        return res.status(200).json(newUrl)
    } catch (error) {
        console.log("Error Generating shortUrl code", error)
        res.status(500).json({ message: "unable to generate shortUrl"})

    }
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