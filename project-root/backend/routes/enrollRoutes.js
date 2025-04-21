import express from "express"
import { enrollStudent,getEnrollment,geEnrollbyUser, completeModule } from "../controllers/enrollmentController.js"

const enrollRoutes = express.Router()

enrollRoutes.get("/", getEnrollment)
enrollRoutes.post("/enroll", enrollStudent)
enrollRoutes.get("/enrollByUser", geEnrollbyUser)
enrollRoutes.post("/completeModule", completeModule)


export default enrollRoutes;