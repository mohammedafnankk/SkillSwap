import React, { useEffect, useState } from "react";
import axiosInstencs from "../../axios/axiosInstence";
import profileImg from "../../assets/images/user.jpg";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import Search from "./Search";
import socket from "../../Socket";

function Dashboard() {
  const navigate = useNavigate()
  const access_token = localStorage.getItem("access_token")
  const userID = localStorage.getItem("id")
//  console.log(access_token,"access_token");
 
  const [user, setUser] = useState([]);
  // const [userID,setUserID]= useState("")
  const [mentor,setMentor] = useState([])

  // axiosInstencs.get('/protect',{
  //   headers:{
  //     "Authorization" :`Bearer ${access_token}`
  //   }
  // }).then((res)=>{
  //     const id =(res.data.user.id);
  //     setUserID(id)
  //     // console.log(res.data.user.id);
      
  // }).catch((err)=>{
  //   console.log("protect Error:",err);
    
  // //   axiosInstencs.post('/refresh-token',{
  // //     token:refresh_token,
  // // }).then((res)=>{
  // //   console.log(res.data);
    
  // //     localStorage.setItem("access_token",res.data.accessToken)
  // //     localStorage.setItem("refresh_token",res.data.refreshToken)
  // // }).catch((err)=>{
  // //     console.log(err)
  // //     // localStorage.clear()
  // // })
  // })


  useEffect(() => {
   
    
  
      
      axiosInstencs.get(`/singleuser/${userID}`,{
        headers:{
              "Authorization" :`Bearer ${access_token}`
            }
      }).then((res)=>{
        // console.log(res.data.msg);
        const userData = (res.data.msg)
        setUser(userData)
        
      })
    
  }, [userID,access_token]);
  useEffect(()=>{

    {user.role === "Student"?
      
     
        axiosInstencs.get(`sug/${userID}`,{
          headers:{
                "Authorization" :`Bearer ${access_token}`
              }
        }).then((res)=>{
          // console.log(res.data.data);
          setMentor(res.data.data)
          
        })
    
      :""}
  },[user,userID,access_token])

  return (
    <div className=" ">
      <div className=" fixed z-50">
        <Sidebar />
      </div>
      <div className="fixed w-[83%] z-20 ml-[224px] max-lg:ml-0 max-lg:w-full">
        <Search />
      </div>

      <div className="space-y-8 py-6 px-4 ml-[224px] max-lg:ml-0 pt-24 bg-gray-50">
        {/* <div><a href="#section-3">Mentor</a></div> */}
        <section className="rounded-lg bg-gradient-to-r from-purple-600 to-indigo-700 p-6 md:p-10 text-white">
          <div className="max-w-3xl">
            <h1 className="text-3xl font-bold mb-4">Welcome to SkillSwap</h1>
            <p className="text-lg mb-6 max-sm:text-md">
              Connect with mentors, share knowledge, and accelerate your
              learning journey.
            </p>
            <div className="flex gap-4">
              <a href="#mentors" className="text-sm px-[20px] py-[10px] rounded-md bg-white hover:bg-gray-100 text-purple-700 font-medium">
              Find your skill based Mentors
              </a>
              {/* <button className="text-sm px-[20px] py-[10px] rounded-md bg-gradient-to-br from-indigo-700 to-purple-600 hover:bg-gray-100 text-white font-medium">
                Explore Skills
              </button> */}
            </div>
          </div>
        </section>
        <section>
          <div className="flex justify-between mb-6 items-center max-sm:mb-3">
            <h2 className="text-2xl font-semibold">Explore Categories</h2>
            <button className="rounded-md px-[20px] py-[10px] text-purple-700 hover:bg-gray-100 text-sm">
              View all <i class="fa-solid fa-arrow-right pl-2"></i>
            </button>
          </div>
          <div className="grid grid-cols-4 gap-5 max-lg:grid-cols-2 max-md:grid-cols-1">
            <div className="p-6 rounded-lg border hover:shadow-lg transition-shadow max-sm:p-5 bg-white">
              <div className="pb-6">
                <div className="flex justify-between items-start">
                  <i class="fa-solid fa-code p-4 rounded-lg bg-blue-100 text-blue-700 w-fit"></i>
                  <div className="px-2.5 py-0.5 text-xs font-[550] border rounded-full inline-flex items-center">
                    245 mentors
                  </div>
                </div>
                <h3 className="text-2xl font-semibold mt-2 pb-2">
                  Programming
                </h3>
                <p className="text-sm text-gray-600">
                  Software development, web, mobile, and more
                </p>
              </div>
              <div className="cursor-pointer flex justify-between items-center hover:bg-[#f1f5f9] px-[20px] py-[10px] rounded-[8px] text-sm">
                <button>Explore</button>
                <i class="fa-solid fa-arrow-right"></i>
              </div>
            </div>
            <div className="p-6 rounded-lg border hover:shadow-lg transition-shadow max-sm:p-5 bg-white">
              <div className="pb-6">
                <div className="flex justify-between items-start">
                  <i class="fa-solid fa-palette p-4 rounded-lg bg-purple-100 text-purple-700 w-fit"></i>
                  <div className="px-2.5 py-0.5 text-xs font-[550] border rounded-full inline-flex items-center">
                    245 mentors
                  </div>
                </div>
                <h3 className="text-2xl font-semibold mt-2 pb-2">Design</h3>
                <p className="text-sm text-gray-600">
                  UI/UX, graphic design, and visual arts
                </p>
              </div>
              <div className="cursor-pointer flex justify-between items-center hover:bg-[#f1f5f9] px-[20px] py-[10px] rounded-[8px] text-sm">
                <button>Explore</button>
                <i class="fa-solid fa-arrow-right"></i>
              </div>
            </div>
            <div className="p-6 rounded-lg border hover:shadow-lg transition-shadow max-sm:p-5 bg-white">
              <div className="pb-6">
                <div className="flex justify-between items-start">
                  <i class="fa-regular fa-lightbulb p-4 rounded-lg bg-yellow-100 text-yellow-700 w-fit"></i>
                  <div className="px-2.5 py-0.5 text-xs font-[550] border rounded-full inline-flex items-center">
                    245 mentors
                  </div>
                </div>
                <h3 className="text-2xl font-semibold mt-2 pb-2">Business</h3>
                <p className="text-sm text-gray-600">
                  Marketing, entrepreneurship, and management
                </p>
              </div>
              <div className="cursor-pointer flex justify-between items-center hover:bg-[#f1f5f9] px-[20px] py-[10px] rounded-[8px] text-sm">
                <button>Explore</button>
                <i class="fa-solid fa-arrow-right"></i>
              </div>
            </div>
            <div className="p-6 rounded-lg border hover:shadow-lg transition-shadow max-sm:p-5 bg-white">
              <div className="pb-6">
                <div className="flex justify-between items-start">
                  <i class="fa-solid fa-book-open p-4 rounded-lg bg-green-100 text-green-700 w-fit"></i>
                  <div className="px-2.5 py-0.5 text-xs font-[550] border rounded-full inline-flex items-center">
                    245 mentors
                  </div>
                </div>
                <h3 className="text-2xl font-semibold mt-2 pb-2">Education</h3>
                <p className="text-sm text-gray-600">
                  Teaching, learning, and academic skills
                </p>
              </div>
              <div className="cursor-pointer flex justify-between items-center hover:bg-[#f1f5f9] px-[20px] py-[10px] rounded-[8px] text-sm">
                <button>Explore</button>
                <i class="fa-solid fa-arrow-right"></i>
              </div>
            </div>
          </div>
        </section>
        {user.role === "Mentor"?"":
        <div>

        <section id="mentors">
          
          <div className="flex justify-between mb-6 items-center max-sm:mb-3">
            <h2 className="text-2xl font-semibold">Mentors</h2>
            <button onClick={()=>navigate(`/all-mentors/${user._id}`)} className="rounded-md px-[20px] py-[10px] text-purple-700 hover:bg-gray-100 text-sm">
              View all <i class="fa-solid fa-arrow-right pl-2"></i>
            </button>
          </div>
          <div className="grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-md:grid-cols-1">
            {mentor.map((m,i)=>(

              <div key={i} className="rounded-lg border shadow-sm hover:shadow-md transition-shadow bg-white">
              <div className="p-6 max-sm:p-3">
                <div className="flex items-start space-x-4">
                  <span className="relative">
                    <img
                      src={m.avatar?m.avatar:profileImg}
                      alt=""
                      className="h-16 w-16 overflow-hidden rounded-full border-2 border-purple-100 object-cover"
                    />
                  </span>
                  <div>
                    <h2 className="font-bold text-lg">{m.username}</h2>
                    <p className="text-gray-500">Senior Developer</p>
                    <div></div>
                  </div>
                </div>
                <div className=" mt-4 grid grid-cols-3 gap-2">
                  {m.skills.map((s,i)=>(

                  <div key={i} className="inlile-flex items-center rounded-full px-2.5 py-0.5 text-xs font-[550] bg-[#f1f5f9] ">
                    {s}
                  </div>
                  ))}
                  {/* <div className="inlile-flex items-center rounded-full px-2.5 py-0.5 text-xs font-[550] bg-[#f1f5f9] ">
                    JavaScript
                  </div>
                  <div className="inlile-flex items-center rounded-full px-2.5 py-0.5 text-xs font-[550] bg-[#f1f5f9] ">
                    Node.js
                  </div> */}
                </div>
              </div>
              <div className="flex items-center p-6 pt-0">
                <Link to={`/mentor/${m._id}/${user._id}`} className=" text-white inline-flex items-center justify-center rounded-md text-sm font-[550] bg-purple-600 hover:bg-purple-700 px-4 py-2 w-full">
                  View Profile
                </Link>
              </div>
            </div>
            ))}
            {/* <div className="rounded-lg border shadow-sm hover:shadow-md transition-shadow">
              <div className="p-6 max-sm:p-3">
                <div className="flex items-start space-x-4">
                  <span className="relative">
                    <img
                      src={profileImg}
                      alt=""
                      className="h-16 w-16 overflow-hidden rounded-full border-2 border-purple-100"
                    />
                  </span>
                  <div>
                    <h2 className="font-bold text-lg">Alex Johnson</h2>
                    <p className="text-gray-500">Senior Developer</p>
                    <div></div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-6 mt-4">
                  <div className="inlile-flex items-center rounded-full px-2.5 py-0.5 text-xs font-[550] bg-[#f1f5f9] ">
                    React
                  </div>
                  <div className="inlile-flex items-center rounded-full px-2.5 py-0.5 text-xs font-[550] bg-[#f1f5f9] ">
                    JavaScript
                  </div>
                  <div className="inlile-flex items-center rounded-full px-2.5 py-0.5 text-xs font-[550] bg-[#f1f5f9] ">
                    Node.js
                  </div>
                </div>
              </div>
              <div className="flex items-center p-6 pt-0">
                <Link className=" text-white inline-flex items-center justify-center rounded-md text-sm font-[550] bg-purple-600 hover:bg-purple-700 px-4 py-2 w-full">
                  View Profile
                </Link>
              </div>
            </div>
            <div className="rounded-lg border shadow-sm hover:shadow-md transition-shadow">
              <div className="p-6 max-sm:p-3">
                <div className="flex items-start space-x-4">
                  <span className="relative">
                    <img
                      src={profileImg}
                      alt=""
                      className="h-16 w-16 overflow-hidden rounded-full border-2 border-purple-100"
                    />
                  </span>
                  <div>
                    <h2 className="font-bold text-lg">Alex Johnson</h2>
                    <p className="text-gray-500">Senior Developer</p>
                    <div></div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-6 mt-4">
                  <div className="inlile-flex items-center rounded-full px-2.5 py-0.5 text-xs font-[550] bg-[#f1f5f9] ">
                    React
                  </div>
                  <div className="inlile-flex items-center rounded-full px-2.5 py-0.5 text-xs font-[550] bg-[#f1f5f9] ">
                    JavaScript
                  </div>
                  <div className="inlile-flex items-center rounded-full px-2.5 py-0.5 text-xs font-[550] bg-[#f1f5f9] ">
                    Node.js
                  </div>
                </div>
              </div>
              <div className="flex items-center p-6 pt-0">
                <Link className=" text-white inline-flex items-center justify-center rounded-md text-sm font-[550] bg-purple-600 hover:bg-purple-700 px-4 py-2 w-full">
                  View Profile
                </Link>
              </div>
            </div> */}
          </div>
        </section>
        <section className="rounded-lg bg-gray-100 p-10 mt-8 max-sm:p-5">
          <div className="flex items-center justify-between gap-6 max-sm:flex-col">
            <div>
              <h2 className="text-2xl font-bold mb-2 max-sm:text-md max-sm:mb-1">
                Ready to share your knowledge?
              </h2>
              <p className="text-[#94a3b8] max-sm:text-sm">
                Become a mentor and help others grow while expanding your
                network.
              </p>
            </div>
            <button className="text-sm rounded-md px-8 bg-purple-600 hover:bg-purple-700 text-white py-4">
            <span className="">Become a Mentor</span>   <i class="fa-solid fa-bolt pl-2"></i>
            </button>
          </div>
        </section>
        </div>

        }
      </div>
    </div>
  );
}

export default Dashboard;
