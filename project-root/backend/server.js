import express from "express"
import connection from "./dbcon/connect.js"
import mongoose from "mongoose"
const app = express()
const con = await connection()

// middlewares 

app.use(express.json())
app.use(express.urlencoded({extended:true}))

// schema for Users

const userSchema = new mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true, unique:true},
    role:{type:String, enum:["instructor", "student"], required:true, unique:true},
    password:{type:String, required:true}
},{timeStamp:true})
const userModel = mongoose.model("Users",userSchema)

// routes for adding user

app.post("/users/api/adduser", async(req,res)=>{
    const {name,email,role,password} = req.body
   
   
    const newUser = userModel({
        "name":name,
        "email":email,
        "role":role,
        "password":password
    })
    const existing = userModel.findOne({email})
    if(existing){
        return res.status(400).json({message:"Email already exists"})
    }
    if(!name || !email || !role || !password){
        return res.status(400).json({message:"Please fill all fields"})
    }
    const created = newUser.save()
    if(!created){
        return res.status(400).json({message:"Failed to create user"})
    }
    res.status(201).json({"message": "created succesfully"})
})

// route for logging in a user

app.post("/users/api/userlogin", async(req,res)=>{
    const {email,password}= req.body
    const user = await userModel.findOne({email})
    if(!user){
        return res.status(400).json({message:"Email does not exist"})
    }
    if(user.password !== password){
        return res.status(400).json({message:"Password is incorrect"})
    }
    res.status(200).json({"message": "logged in successfully"})
})

app.get("/users", async(req,res)=>{
    const users = await userModel.find()
    if(!users){
        return res.status(400).json({message:"No users found"})
    }
    res.json(users)
})





app.listen(3000, ()=>{
    console.log("server running on port 3000")
})