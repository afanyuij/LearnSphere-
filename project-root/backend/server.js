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
    role:{type:String, enum:["instructor", "student"], required:true},
    password:{type:String, required:true}
},{timeStamp:true})
const userModel = mongoose.model("Users",userSchema)

// view all users
app.get("/users", async(req,res)=>{
    const users = await userModel.find()
    if(!users){
        return res.status(400).json({message:"No users found"})
    }
    res.status(200).json({"users":users})
})

// routes for adding user

app.post("/users/api/adduser", async(req,res)=>{
    const {name,email,role,password} = req.body
   
    const newUser = userModel({
        "name":name,
        "email":email,
        "role":role,
        "password":password
    })
    const existing = await userModel.findOne({email})
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


// deleting a user

app.delete("/users/deleteUser", async(req,res)=>{
    const {id}=req.query
    const deleteUser = await userModel.findByIdAndDelete(id);
    if(!deleteUser){
        return res.status(400).json({message:"User not found"})
    }
    res.status(200).json({"status":"user deleted successfully"})

})


// updating users

app.put("/updateuser", async(req,res)=>{
    const {id}=req.query
    const {name,email,role,password}=req.body
    const updatedUser= await userModel.findByIdAndUpdate(id,{
        "name":name,
        "email":email,
        "role":role,
        "password":password
    })
    if(!updatedUser){
        return res.status(400).json({message:"User not found"})
    }
    res.status(200).json({"message": "user updated successfully"})
})

// courses schema

const courseSchema =new mongoose.Schema({
    // title, description ,instructor,price, thumbnail,[modules: title, enum: video pdf contenturl ]
    "title": {type:String, required:true },
    "description": {type:String, required:true },
    "instructor": { type: con.Schema.Types.ObjectId, ref: "Users" },
    "price": {type:Number},
    "thumbnail":{type:String}, // image in base64
    "modules": [
        {
            "title": {type:String, required:true},
            "type": {type:String, enum:["video", "pdf"]},
            "contentUrl":{type:String}
        }
    ]


})
const courseModel = mongoose.model("Courses", courseSchema)




app.listen(3000, ()=>{
    console.log("server running on port 3000")
})