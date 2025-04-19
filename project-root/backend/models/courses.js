import mongoose from "mongoose"

// courses schema

const courseSchema = new mongoose.Schema({
    // title, description ,instructor,price, thumbnail,[modules: title, enum: video pdf contenturl ]
    "title": {type:String, required:true },
    "description": {type:String, required:true },
    "instructor": { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
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
export default courseModel;