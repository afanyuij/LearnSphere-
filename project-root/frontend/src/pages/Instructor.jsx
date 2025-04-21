import {
    BookOpen,
    GraduationCap,
    Home,
    Search,
    User,
    PlusCircle,
    BarChart3,
    Users,
    Settings,
    FileEdit,
  } from "lucide-react"
  
export  function Instructor() {
    return (
      <div className="flex min-h-screen flex-col">
        {/* Header/Navigation Bar */}
        <header className="sticky top-0 z-50 flex h-16 items-center gap-4 border-b bg-white px-4 md:px-6">
          <a href="/dashboard" className="flex items-center text-gray-800 gap-2 font-semibold">
            <span className="hidden md:inline-block">LearnSphere/ Instructor</span>
          </a>
          <div className="relative ml-auto flex-1 md:grow-0 md:w-80">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <input
              type="search"
              placeholder="Search your courses..."
              className="w-full text-gray-800 rounded-lg border border-gray-200 pl-8 h-10 md:w-80"
            />
          </div>
          <div className="ml-auto hidden items-center gap-4 md:flex">
            <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">Help Center</button>
            <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
              <img src="/placeholder.svg" alt="Instructor" className="h-full w-full object-cover" />
              <span className="absolute inset-0 flex items-center justify-center text-xs font-medium">JD</span>
            </div>
          </div>
          <button className="ml-auto md:hidden p-2 rounded-md hover:bg-gray-100" aria-label="Toggle menu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>
        </header>
  
        <div className="flex flex-1">
          {/* Sidebar */}
          <aside className="w-64 border-r  bg-white hidden md:block">
            <div className="py-4">
              <nav className="grid gap-1 px-2">
                <a
                  href="/dashboard"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-800 hover:text-gray-900 hover:bg-gray-100"
                >
                  <Home className="h-4 w-4" />
                  Dashboard
                </a>
  
                {/* Course Management Section */}
                <div className="mt-6 px-3">
                  <h3 className="mb-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">Course Management</h3>
                </div>
  
                <a
                  href="/dashboard/courses"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-800 hover:text-gray-900 hover:bg-gray-100"
                >
                  <BookOpen className="h-4 w-4" />
                  My Courses
                </a>
                <a
                  href="/dashboard/courses/create"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-800 hover:text-gray-900 hover:bg-gray-100"
                >
                  <PlusCircle className="h-4 w-4" />
                  Create Course
                </a>
                
  
                {/* Other Instructor Tools */}
                <div className="mt-6 px-3">
                  <h3 className="mb-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">Instructor Tools</h3>
                </div>
  
                <a
                  href="/dashboard/students"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-800 hover:text-gray-900 hover:bg-gray-100"
                >
                  <Users className="h-4 w-4" />
                  Students
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
          <main className="flex-1 p-4 md:p-6 bg-gray-100">
            {/* Create Course Button - Always visible for quick access */}
            <div className="mb-6 flex justify-end">
              <a
                href="/dashboard/courses/create"
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
              >
                <PlusCircle className="h-4 w-4" />
                Create New Course
              </a>
            </div>  
             </main>
        </div>
      </div>
    )
  }
  
 
  