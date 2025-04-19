import express from "express"
import { allUsers, registerUser, loginUser } from "../controllers/usercontroller.js";
const Router = express.Router()

Router.get("/allusers", allUsers)
Router.post("/register", registerUser)
Router.post("/login", loginUser)

export default Router
