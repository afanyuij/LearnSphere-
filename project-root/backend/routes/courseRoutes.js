import express from "express"
import { allCourses, addCourse, deleteCourse, updateCourse } from "../controllers/courseController.js"
const courseRouter = express.Router()

courseRouter.get("/allcourse", allCourses)
courseRouter.post("/addcourse",addCourse)
courseRouter.delete("/delete", deleteCourse)
courseRouter.put("/update", updateCourse)


export default courseRouter