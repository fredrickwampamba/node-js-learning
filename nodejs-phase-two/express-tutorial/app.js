const express = require("express")
const app = express();
const path = require('path')

app.use("/public",express.static(path.join(__dirname,'static')))
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'static','html.html'))
})

app.get('/example', (req,res)=>{
    res.send("example file on a different route")
})

app.get('/example/:name/:age', (req,res)=>{
    console.log(req.params);
    console.log(req.query);
    res.send(req.params.name + " : " + req.params.age)
})

app.set("view engine", "ejs")

app.get('/sample/:name',(req,res)=>{
    res.render('index', {getName :{ name : req.params.name ,
                                searchResults : ["Fredrick Wampamba","fredrick Musoke","Malagala Simon Peter Fredrick"]}})
})

app.listen(3000)