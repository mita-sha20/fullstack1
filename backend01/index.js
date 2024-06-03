require('dotenv').config()
const express = require('express')
const router = require('./routes')
var cors = require('cors')
const app = express()
const mongoconfig=require("././config/mongoconfig")
const path = require('path')


mongoconfig();
app.use(cors())
app.use(express.json());
app.use('/',router)
app.use('/uploads',express.static(path.join(__dirname,'uploads')))

const port = process.env.PORT || 8000

app.listen(port,()=>{
    console.log("port running");
});