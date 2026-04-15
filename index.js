const express = require('express')
const connectDB = require('./db')
const router = express.Router()
const app = express()
require('dotenv').config()


const url = (req, res) => {
    res.send(" main hoon URL")
}

app.use(express.json())
 router.get("/url", url)

 app.use("/api", router)

 connectDB()

 app.get("/", (req,res) => {
    res.send("Server khaint running te a baiji")
 })

app.listen(3000, ()=> {
    console.log('Server is running on port 3000')
})