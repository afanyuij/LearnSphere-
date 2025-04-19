import userModel from "../models/users.js"

// view all users
 export const allUsers = async(req,res)=>{
    const users = await userModel.find()
    if(!users){
        return res.status(400).json({message:"No users found"})
    }
    res.status(200).json({"users":users})
 }

// routes for adding user

export const registerUser= async(req,res)=>{
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

}
// route for logging in a user

export const loginUser = async(req,res)=>{
    const {email,password}= req.body
    const user = await userModel.findOne({email})
    if(!user){
        return res.status(400).json({message:"Email does not exist"})
    }
    if(user.password !== password){
        return res.status(400).json({message:"Password is incorrect"})
    }
    res.status(200).json({"message": "logged in successfully"})
}


// deleting a user



