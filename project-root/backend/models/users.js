import mongoose from "mongoose"
const userSchema = new mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true, unique:true},
    role:{type:String, enum:["instructor", "student"], required:true},
    password:{type:String, required:true}
},{timeStamp:true})
const userModel = mongoose.model("Users",userSchema)

export default userModel;