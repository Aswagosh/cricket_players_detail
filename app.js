const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const cricketModel=require("./models/cricket")

const app=express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
mongoose.connect("mongodb+srv://aswagosh73:Aswa123@cluster0.xinjjtv.mongodb.net/cricketplayersDataBase?retryWrites=true&w=majority&appName=Cluster0")

app.get("/",(req,res)=>{
    res.send("Welcome to the page")
})

app.post("/register",async(req,res)=>{
    let data=req.body
    console.log(data)
    let cricket=new cricketModel(data)
    let result=await cricket.save()
    res.json({"Status":"Success"}) 
})
app.post("/search",async(req,res)=>{
    let input=req.body
    let result=await cricketModel.find(input)
    res.json(result)
})

app.listen(8080,()=>{
    console.log("SERVER IS STARTED")
})