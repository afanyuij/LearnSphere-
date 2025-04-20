import { Navbar } from "../components/Navbar"
import { Building,GraduationCap,LibraryBig,BookOpenCheck,User, LogOut,ServerCog  } from 'lucide-react';
import axiosInt from "../api/axiosInit";
import { useState, useEffect } from "react";
export function Course(){
    const [courses, setCourse ]= useState([]);
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
        const fetchCourse = async()=>{
            try{
                const res = await axiosInt.get("/courses")
                console.log("API Response:", res.data);
                setCourse(res.data);
            }catch(err){
                console.log(err)
            }finally{
                setLoading(false)
            }
        }
        fetchCourse()
    },[])
    return (
        <>
           <div className="coursebac w-screen h-[100vh] p-8 px-16">
           <Navbar />
           <h1 className="mt-24 text-white text-center text-4xl ml-14 pop font-bold mb-24">Online Courses</h1>
           
           

            {loading ? (
                <div className="flex justify-center items-center h-screen">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border">Loading....</div>
                </div>
            ) : (
                <div className="flex justify-center p-6 flex-wrap gap-6">
                {courses.map((course) => (
                  <div className="card bg-white w-96 shadow-xl" key={course._id}>
                    <figure>
                      <img
                        src="/learn.jpg"
                        alt={course.title}
                        className="w-full h-48 object-cover"
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title text-black flex justify-between">
                        {course.title}
                        <p className="text-lg font-semibold text-blue-500">${course.price}/month</p>
                      </h2>
                      <p className="text-sm text-gray-600">{course.description.split("").slice(0,100).join("")}....</p>
                      
                      {/* You can open the modal using document.getElementById('ID').showModal() method */}
                    <button className="btn" onClick={()=>document.getElementById('my_modal_3').showModal()}>Read More</button>
                    <dialog id="my_modal_3" className="modal w-screen">
                      <div className="modal-box bg-white w-full">
                        <div className="img w-full mt-2">
                            <img src="/learn.jpg" alt="" srcset="" />
                        </div>
                     <form method="dialog">
                     {/* if there is a button in form, it will close the modal */}
                          <button className="cursor-pointer  btn-sm btn-circle  hover:bg-gray-100 absolute right-2 top-2 text-black">✕</button>
                     </form>
                         <h3 className="font-bold text-lg text-gray-600 text-center mt-4">Learn {course.title}</h3>
                                <p className="py-4 text-gray-700 mb-2">{course.description}</p>
                                <a href="#">
                                    3<button className="bg-gray-800 p-3 w-full">Enroll Now</button>
                                    </a>
                        </div>
                        </dialog>
                     
                    </div>
                  </div>
                ))}
              </div>
              
            )
        }
            

          
                
            

           </div>
           
        </>
    )
}