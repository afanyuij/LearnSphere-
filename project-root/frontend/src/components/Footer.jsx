import { Instagram,Facebook,Twitter } from 'lucide-react';
export function Footer(){
    return(
        <>
            <div className="w-full flex justify-between pop mt-10 px-16 mb-5">
                <div className="logo-section text-left w-[50%]">
                    <h1 className="text-white text-5xl font-medium mb-8">LearnSphere</h1>
                    <p className="w-[50%] mb-3">We are providing the best courses brought to you by the best experts</p>
                    <div className="flex gap-3">
                    <Instagram size={40} color="#ffffff" strokeWidth={2.5} absoluteStrokeWidth /> 
                    <Facebook size={40} color="#ffffff" strokeWidth={2.5} absoluteStrokeWidth />
                    <Twitter size={40} color="#ffffff" strokeWidth={2.5} absoluteStrokeWidth />
                    </div>
                </div>
                <div className="course-section text-left w-[20%]">
                    <h1 className="text-white text-2xl font-medium mb-5">Popular Courses</h1>
                   <p className="text-gray-300 mb-2">xdmfsdf dfsdjji</p>
                   <p className="text-gray-300 mb-2">xdmfsdf dfsdjji</p>
                   <p className="text-gray-300 mb-2">xdmfsdf dfsdjji</p>
                   <p className="text-gray-300 mb-2">xdmfsdf dfsdjji</p>
                </div>
                <div className="course-section text-left w-[20%]">
                    <h1 className="text-white text-2xl font-medium mb-5">Popular Courses</h1>
                   <p className="text-gray-300 mb-2">xdmfsdf dfsdjji</p>
                   <p className="text-gray-300 mb-2">xdmfsdf dfsdjji</p>
                   <p className="text-gray-300 mb-2">xdmfsdf dfsdjji</p>
                   <p className="text-gray-300 mb-2">xdmfsdf dfsdjji</p>
                </div>
                <div className="course-section text-left w-[20%] mb-10">
                    <h1 className="text-white text-2xl font-medium mb-5">Popular Courses</h1>
                   <p className="text-gray-300 mb-2">xdmfsdf dfsdjji</p>
                   <p className="text-gray-300 mb-2">xdmfsdf dfsdjji</p>
                   <p className="text-gray-300 mb-2">xdmfsdf dfsdjji</p>
                   <p className="text-gray-300 mb-2">xdmfsdf dfsdjji</p>
                </div>
                
            </div>
            <hr className="text-gray-500 mb-5" />
            <div className="nav-items w-full justify-center flex gap-16 pop">
                    <a href="/" className="text-xl p-2 hover:bg-amber-300 px-3 rounded-md duration-200">Home</a>
                    <a href=""  className="text-xl p-2 hover:bg-amber-300 px-3 rounded-md duration-200">Courses</a>
                    <a href="" className="text-xl p-2 hover:bg-amber-300 px-3 rounded-md duration-200" >Instructor</a>
                    <a href=""  className="text-xl p-2 hover:bg-amber-300 px-3 rounded-md duration-200">Blog</a>
                </div>
        </>
    )
}