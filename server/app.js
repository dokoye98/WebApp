const express = require('express')
const {restart} = require('nodemon')
const app = express()



app.listen(3000,()=>{
    console.log("app is running")
})