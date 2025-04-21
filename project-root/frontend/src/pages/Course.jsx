import { BookOpen, GraduationCap, Home, Search, User } from "lucide-react"
// import axiosInt from "../api/axiosInit"
// import { useState,useEffect } from "react"
export function Course() {
  // const [users, setUsers] = useState([])
  
  // useEffect(()=>{
  //     const fetchUser = async () => {
  //       const user = await axiosInt.get('/users');
  //       setUsers(user.data.users);
  //       console.log(user.data);
  //     }
  //     fetchUser()
  // },[])
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header/Navigation Bar */}
      <header className="sticky top-0 z-50 flex h-16 items-center gap-4 border-b bg-white px-4 md:px-6">
        <a href="/dashboard" className="flex items-center text-gray-800 gap-2 font-semibold">
          
          <span className="hidden md:inline-block">LearnSphere/Courses</span>
        </a>
        <div className="relative ml-auto flex-1 md:grow-0 md:w-80">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <input
            type="search"
            placeholder="Search courses..."
            className="w-full rounded-lg border text-gray-800 border-gray-200 pl-8 h-10 md:w-80"
          />
        </div>
        <div className="ml-auto hidden items-center gap-4 md:flex">
          <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">Help Center</button>
          <div className="avatar avatar-placeholder">
          

           <div className="bg-neutral text-neutral-content w-10 rounded-full" >
             <span className="text-xl">D</span>
           </div>
          
          </div>
        </div>
       
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 border-r bg-white hidden md:block">
          <div className="py-4">
            <nav className="grid gap-1 px-2">
              <a
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-800 hover:text-gray-900 hover:bg-gray-100"
              >
                <Home className="h-4 w-4" />
                Dashboard
              </a>
              <a
                href="/dashboard/my-courses"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-800 hover:text-gray-900 hover:bg-gray-100"
              >
                <BookOpen className="h-4 w-4" />
                My Courses
              </a>
              <a
                href="/dashboard/courses"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-800  hover:text-gray-900 hover:bg-gray-100"
              >
                <Search className="h-4 w-4" />
                Browse Courses
              </a>
              <a
                href="/dashboard/profile"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-800 hover:text-gray-900 hover:bg-gray-100"
              >
                <User className="h-4 w-4" />
                Profile
              </a>
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 md:p-6 bg-gray-100"></main>
      </div>
    </div>
  )
}

