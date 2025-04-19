import courseModel from "../models/courses.js";


// retrieving all courses
export const allCourses = async(req,res)=>{
    try{
        const courses = await courseModel.find();
        if(!courses){
            return res.status(404).json({message:"No courses found"});
        }
        res.status(200).json(courses);
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
}

// adding a course

export const addCourse = async(req,res)=>{
    try{

        const {title, description ,instructor,price, thumbnail,modules}=req.body
        const exist = await courseModel.findOne({title})
        if(exist){
            return res.status(400).json({message:"Course already exists"})
        }
        if(!title || !instructor || !price || !modules || modules.length===0){
            return res.status(400).json({message:"Please fill in all fields"})
        }
        const newCourse = courseModel({
            "title":title,
            "description":description,
            "instructor":instructor,
            "price":price,
            "thumbnail":thumbnail,
            "modules":modules
        })
        const created =await newCourse.save()
        res.status(201).json({message:"Course created successfully", created})
    }catch(error){
        res.status(500).json({message:error.message})
    }

    
}

// COURSE CRUD OPERATIONS.....

// deleting course
export const deleteCourse = async(req,res)=>{
    const {id} = req.query;
    const deletedCourse = await courseModel.findByIdAndDelete(id)
    if(!deletedCourse){
        return res.status(404).json({message:"Course not found"})
    }
    res.status(200).json({"message":"course deleted successfully"})
}

export const updateCourse = async(req,res)=>{
    const {id} = req.query
    const {title, description ,instructor,price, thumbnail,modules}=req.body
    if(!title || !instructor || !price || !modules || modules.length===0){
        return res.status(400).json({message:"Please fill in all fields"})
    }
    const courseUpdate = await courseModel.findByIdAndUpdate(id,{
        title:title,
        description:description,
        instructor:instructor,
        price:price,
        thumbnail:thumbnail,
        modules:modules

    }) 
    const updatedCourse = courseUpdate.save()
    res.status(200).json({message:"Course updated successfully", updatedCourse})
}