import enrollmentModel from "../models/enrollment.js";
import courseModel from "../models/courses.js";

export const getEnrollment = async(req,res)=>{

    // const {userId}=req.query
    const allEnrollment = await enrollmentModel.find().populate("users").populate("course")
    if(!allEnrollment || allEnrollment.length === 0){
        return res.status(404).json({message: "No enrollment found"})
    }
    res.status(200).json(allEnrollment)
}

export const geEnrollbyUser= async (req,res)=>{
    const {userId}=req.query
    const userEnroll = await enrollmentModel.find({"Users":userId}).populate("users").populate("course")
    if(!userEnroll || userEnroll.length === 0){
        return res.status(404).json({message: "No enrollment found"})
    }
    res.status(200).json(userEnroll)
}

export const enrollStudent= async(req,res)=>{
    try{
        const {users,course} = req.body
        if(!users || !course){
            return res.status(400).json({message: "Please provide both user and course."})
        }
        const existingEnrollment = await enrollmentModel.findOne({users, course})
        if(existingEnrollment){
            return res.status(400).json({message: "Student is already enrolled in this course."})
        }
        const newEnrollment = new enrollmentModel({
            "users":users, 
            "course":course
        })
        const createdEnrollment = await newEnrollment.save()
        res.status(201).json({message: "Student enrolled successfully.", createdEnrollment})
    }
    catch(error){
        console.log(error)
    }
}

// updating progress 


export const completeModule = async (req, res) => {
    try {
      const { enrollmentId } = req.query;
      const { moduleId } = req.body;
    //   get all enrollment
    const enrollment = await enrollmentModel.findById(enrollmentId).populate("course")
    if(!enrollment){
        return res.status(404).json({message: "No enrollment found."})
    }

    // variable storing the course modules and a variable storing the total modules

    const courseModules = enrollment.course.modules;
    const totalModules = courseModules.length;

    // checking if the modules exists

    const moduleExist = courseModules.some(mod => mod._id.toString() === moduleId)
    if(!moduleExist){
        return res.status(404).json({message: "Module not found."})
    }

    // condition to check if the progress bar exist and if not initialize the array

    if(!enrollment.progressBar){
        enrollment.progressBar = []
    }
    // check if module is marked as completed

    const completedModule = enrollment.progressBar.includes(moduleId)
    if(completedModule){
        return res.status(400).json({message: "Module is already completed."})
    }
    // add the module
    enrollment.progressBar.push(moduleId)

    // calculating progress and updating the percentage

    enrollment.progress = Math.round((enrollment.progressBar.length/totalModules)*100)
    // saving the enrollment
    await enrollment.save()
    res.json({message: "Module completed successfully.",
        progressBar: enrollment.progressBar,
        completedModule:enrollment.progressBar,
    })
      
    } catch (error) {
      res.status(500).json({ message: "Something went wrong", error });
    }
  };