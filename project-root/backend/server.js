import express from "express"
import connection from "./dbcon/connect.js"
import userRouter from "./routes/userRoutes.js"
import courseRouter from "./routes/courseRoutes.js"
import enrollRoutes from "./routes/enrollRoutes.js"
import cors from "cors"


const app = express()
await connection()
const PORT = process.env.PORT || 3000



// middlewares 
app.use(cors({origin: "http://localhost:5173", credentials:true}))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// Routes

app.use("/api/users", userRouter)
app.use("/api/courses",courseRouter)
app.use("/api/enrollment", enrollRoutes)




// crud operation endpoints for courses model



app.listen(PORT, ()=>{
    console.log("server running on port 3000")
})