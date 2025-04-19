import mongoose from "mongoose";

const discussionSchema = new mongoose.Schema({
    course : {type: mongoose.Schema.Types.ObjectId, ref:"Courses", required:true},
    user: {type:mongoose.Schema.Types.ObjectId, ref:"Users", required:true},
    title : {type:String, required:true},
    message:{type:String, required:true},
    replies:[
        {
          user:  {type:mongoose.Schema.Types.ObjectId, ref:"Users"},
          message: {type:String},
          created_at: {type:Date, default:Date.now}
        }
    ],
    created_at: { type: Date, default: Date.now }
})
const discussionModel = mongoose.model("Discussion", discussionSchema);
export default discussionModel;