const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const{contactmodel}=require("./models/contact")

const app=express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://sandravijumon:sandra2001@cluster0.g6coklg.mongodb.net/contactDB?retryWrites=true&w=majority&appName=Cluster0")

app.post("/add",(req,res)=>{
    let input=req.body
    let contact=new contactmodel(input)
    contact.save()
    console.log(contact)
    res.json({status:"Success"})
})


app.listen(8080,()=>{
    console.log("server started")
})