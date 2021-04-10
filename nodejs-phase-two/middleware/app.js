const express = require('express')
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.use((req, res, next)=>{
    console.log(req.url, req.method)
    next()
})

app.use("/example",(req, res, next)=>{
    console.log(req.url, req.method)
    next()
})

app.listen(4000)