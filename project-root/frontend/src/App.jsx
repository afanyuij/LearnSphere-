import { BrowserRouter,Routes,Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { Course } from "./pages/Course"
import { Login } from "./pages/Login"
import { Register } from "./pages/Register"
import { Instructor } from "./pages/Instructor"

export default function App(){
  return(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/course" element={<Course />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/instructor" element={<Instructor />} />
        </Routes>
    </BrowserRouter>
)
}