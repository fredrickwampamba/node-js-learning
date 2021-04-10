const express = require('express')
const path = require('path')
const app = express()
const joi = require('joi')
const bodyParser = require('body-parser')
const Joi = require('joi')

app.use('/public',express.static(path.join(__dirname,'static')))

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'static','login.html'))
})

app.use(bodyParser.urlencoded({extended : false}))
app.use(bodyParser.json())
app.post('/',(req,res)=>{
    // console.log("A post was made with the data below")
    // console.log(req.body)
    //DO some databse work here
    //res.send("Data has been succesfully posted")
    // res.json({success:true})

    const loginSchema = Joi.object().keys({
        email : Joi.string().trim().email().required(),
        password: Joi.string().min(5).max(12).required()
    })

    try {
        loginSchema.validate(req.body)
        console.log("Data posted successfully")
        console.log(loginSchema.validate(req.body))
        res.json({success:"Data posted successfully and well validated"})
    } catch (error) {
        console.log(error)
        console.log("An error has occured")
        res.json({failed:false, message:error})
    }
    
    

    // (err, result)=>{
    //     if(err){
    //         console.log(err)
    //         console.log("An error has occured")
    //     }

    //     console.log("Data posted successfully")
    //     console.log(result)
    // }


})

app.listen(3000)