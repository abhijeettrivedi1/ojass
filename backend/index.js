const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')

require("dotenv").config()
app.use(express.json())

app.use(cors({
  credentials:true,
  origin:"*",
}));
 mongoose.connect(process.env.mongo_uri)
 .then(()=>console.log('Connected to Mongo'))
 .catch((err)=>console.log(err));
 
 
 
 app.get("/",(req, res) => {
  console.log("hell ")
  return res.json("hello hi")
 
})

app.listen(3001, () => {
  console.log('Example app listening on port 3000!')
})