require('dotenv').config()
const express = require('express')

const app = express()


app.get('/',(req,res)=>{
  res.send("welcome to home route")
})

app.get('/twitter',(req,res)=>{
  res.send("welcome to twitter")
})

app.get('/login',(req,res)=>{
  res.send("<h1>Please login here</h1>")
})

app.listen(process.env.PORT,()=>{
  console.log(`welcome to server running at port ${process.env.PORT}`)
})
