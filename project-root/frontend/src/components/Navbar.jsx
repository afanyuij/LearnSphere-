import { ChartLine, ChartNoAxesCombined,Award,User,Calendar,ChevronDown } from 'lucide-react';

export function Navbar(){
    return(
        <div className="w-full">
            <nav className="w-full flex items-center justify-between pop shadow-2xl py-2 ">
                <div className="logo text-2xl">
                    <h1>LearnSphere</h1>
                </div>
                <div className="nav-items flex gap-16 pop">
                    <a href="/" className="text-xl p-2 hover:text-gray-500 hover:bg-amber-300 px-3 rounded-md duration-200">Home</a>
                    
                    <a href=""  className="text-xl p-2 hover:text-gray-500 hover:bg-amber-300 px-3 rounded-md duration-200">About</a>
                <a href="/contact" className="text-xl p-2 hover:text-gray-500 hover:bg-amber-300 px-3 rounded-md duration-200">Contact Us</a>
                </div>
                <div className="dropdown w-[10%] ">
                <div tabIndex={0} role="button" className="bg-gray-800 m-1 w-full p-3 flex items-center justify-center gap-3 cursor-pointer">Guest <User size={30} color="#ffffff" absoluteStrokeWidth /><ChevronDown size={20} color="#ffffff" absoluteStrokeWidth /></div>
                     <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-xl">
                        <h3 className=' my-3'>Sign in to Your account</h3>
                       <li className='hover:bg-yellow-400 hover:text-gray-900 duration-200 my'><a href='/login'>Sign In</a></li>
                        <li className='hover:bg-yellow-400 hover:text-gray-900 duration-200 my'><a>Sign Up</a></li>
                 </ul>
                    </div>

            </nav>
        </div>
    )
}