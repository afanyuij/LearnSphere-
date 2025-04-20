import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ChartLine, ChartNoAxesCombined,Award,Users,Calendar } from 'lucide-react';

export function Home(){
    return(
<>
    <div className="bg w-screen h-[90vh] p-8 px-16">
        <Navbar />

        <div className="content text-left xl:mt-36">
            <div className="heade pop font-medium text-6xl w-[60%] tracking-wide xl:mb-12">

            <h1>Leading Educational Platform Available for you Online On Learn<span className="text-amber-300">Sphere</span></h1>
            </div>
            <div className="sub-heading text-gray-200 w-[30%] xl:text-xl xl:mb-12">
                <p>Online courses presented to you be our best instructors ready and willing to assist you in your leaning join the community of learners today</p>
            </div>

            <button className="p-3 px-6 text-gray-500 text-xl font-bold rounded-md bg-amber-300">Get Started</button>

        </div>
        
    </div>

    <div className="w-screen h-[80vh] bg-gray-100 p-8 px-16">
    <div className="content text-left xl:mt-18 text-black mb-8">
            <div className="heade pop font-medium text-5xl w-full text-center xl:mb-8">

            <h1>Your Online Learning Journey made Easy</h1>
            </div>
            <div className="sub-heading text-center text-gray-500  xl:text-xl xl:mb-10">
                <p>Online courses presented to you be our best instructors ready and willing to assist you in your leaning join the community of learners today</p>
            </div>

           

        </div>
        <div className="flex w-full justify-center gap-12 grid-cols-4 mb-8 mt-18">
            {/* card 1 */}
            <div className="card bg-white w-96 shadow-sm">
                <div className="flex justify-center pt-12">
                    <div className="bg-red-200 p-4 rounded-full">

                    <ChartNoAxesCombined size={40} color="#f54747" strokeWidth={2.5} />
                    </div>
            </div>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-black font-medium text-xl">We are insightful</h2>
                         <p className="text-gray-500 w-[60%]">Get real time insights to tract  your progress and growth</p>
                
                </div>
             </div>
               {/* card 2 */}
            <div className="card bg-white w-96 shadow-sm">
                <div className="flex justify-center pt-12">
                    <div className="bg-gray-200 p-4 rounded-full">

                    <Award size={40} color="#000000" strokeWidth={2.5} absoluteStrokeWidth />
                    </div>
            </div>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-black font-medium text-xl">We are insightful</h2>
                         <p className="text-gray-500 w-[60%]">Get real time insights to tract  your progress and growth</p>
                
                </div>
             </div>
              {/* card 2 */}
            <div className="card bg-white w-96 shadow-sm ">
                <div className="flex justify-center pt-12">
                    <div className="bg-gray-200 p-4 rounded-full">

                    <Users size={40} color="#000000" strokeWidth={2.5} absoluteStrokeWidth />
                    </div>
            </div>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-black font-medium text-xl">We are insightful</h2>
                         <p className="text-gray-500 w-[60%]">Get real time insights to tract  your progress and growth</p>
                
                </div>
             </div>
              {/* card 2 */}
            <div className="card bg-white w-96 shadow-sm">
                <div className="flex justify-center pt-12">
                    <div className="bg-gray-200 p-4 rounded-full">

                    <Calendar size={40} color="#000000" strokeWidth={2.5} absoluteStrokeWidth />
                    </div>
            </div>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-black font-medium text-xl">We are insightful</h2>
                         <p className="text-gray-500 w-[60%]">Get real time insights to tract  your progress and growth</p>
                
                </div>
             </div>

        </div>
        
    {/* card2 */}
     </div>

    <div className="w-screen h-[80vh]  bg-white p-8 px-16">

        <div className="text-left mt-6 mb-6 ">
            <h1 className="text-6xl font-bold bg-gradient-to-l from-purple-800 via-fuchsia-600  to-yellow-300 text-transparent bg-clip-text mb-3">Testimonials</h1>
            <p className="text-gray-500 text-xl w-[30%]">Don't just take our word for it - see what actual users of our service have to say about their experience</p>
        </div>

        <div className="flex justify-center pt-12 gap-10 grid-cols-3">
            {/* card 1 */}
        <div className="card bg-white w-96 shadow-lg p-6">
            <div className="flex justify-center mb-6">

                <p className="text-center text-gray-600  ">“LearnSphere made learning React so easy! The modules were engaging,
                     and I loved tracking my progress. 
                     I landed my first tech job two months after completing the course!”</p>
            </div>

            <div className="rating w-full flex justify-center mb-6">
                <div className="mask mask-star bg-yellow-300"  aria-label="1 star"></div>
                <div className="mask mask-star bg-yellow-300"  aria-label="2 star"></div>
                <div className="mask mask-star bg-yellow-300"  aria-label="3 star" ></div>
                <div className="mask mask-star bg-yellow-300"  aria-label="4 star" aria-current="true"></div>
                <div className="mask mask-star bg-yellow-300"  aria-label="5 star"></div>
            </div>
            <div className="avatar flex justify-center">
            <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
            </div>    
         </div>

           {/* card 1 */}
        <div className="card bg-white w-96 shadow-lg p-6">
            <div className="flex justify-center mb-6">
            <p className="text-center text-gray-600  ">“LearnSphere made learning React so easy! The modules were engaging,
                     and I loved tracking my progress. 
                     I landed my first tech job two months after completing the course!”</p>
            </div>
            <div className="rating w-full flex justify-center mb-6">
                <div className="mask mask-star bg-yellow-300"  aria-label="1 star"></div>
                <div className="mask mask-star bg-yellow-300"  aria-label="2 star"></div>
                <div className="mask mask-star bg-yellow-300"  aria-label="3 star" aria-current="true"></div>
                <div className="mask mask-star bg-yellow-300"  aria-label="4 star"></div>
                <div className="mask mask-star bg-yellow-300"  aria-label="5 star"></div>
            </div>
             <div className="avatar flex justify-center">
             <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                 <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
            </div>   
         </div>

           {/* card 1 */}
        <div className="card bg-white w-96 shadow-lg p-6">
            <div className="flex justify-center mb-6">

                <p className="text-center text-gray-600  ">“I’ve tried a few platforms, but none match the clarity and support I got here.
                     The instructors explain concepts in a way that just clicks. Plus, the interface is clean and fun to use.”</p>
            </div>

            <div className="rating w-full flex justify-center mb-6">
                <div className="mask mask-star bg-yellow-300"  aria-label="1 star"></div>
                <div className="mask mask-star bg-yellow-300"  aria-label="2 star"></div>
                <div className="mask mask-star bg-yellow-300"  aria-label="3 star"></div>
                <div className="mask mask-star bg-yellow-300"  aria-label="4 star"></div>
                <div className="mask mask-star bg-yellow-300"  aria-label="5 star"  aria-current="true"></div>
            </div>
             
             <div className="avatar flex justify-center">
             <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
             </div>
            </div> 
            <div className="text-center w-full">
                <h1 className="text-black"> Sharon W</h1>
                <h4 className="text-gray-600"> Freelance Designer</h4>
                </div>  
                
         </div>
  
</div>

        

    </div>
    
    
    {/* footer */}
    <div className="w-screen h-[50vh] bg-[#1e242c] p-8 px-16">
        <Footer/>
    </div>

    </>
    )
}