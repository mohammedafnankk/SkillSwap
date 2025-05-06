import React, { useEffect, useState } from 'react'
import Search from './Search'
import Sidebar from './Sidebar'
import profileImg from '../../assets/images/user.jpg'
import axiosInstencs from '../../axios/axiosInstence'
import { Link, useParams } from 'react-router-dom'

function Allmentors() {
    const {id} = useParams()
const [mentor ,setMentor]= useState([])




useEffect(()=>{
    axiosInstencs.get('/allmentors').then((res)=>{
        console.log(res.data);
        setMentor(res.data.allMentors)
        
    }).catch((err)=>console.log(err))
},[])


  return (
    <div>
      <div className=" fixed z-50">
        <Sidebar />
      </div>
      <div className="fixed w-[83%] z-20 ml-[224px] max-lg:ml-0 max-lg:w-full">
        <Search />
      </div>
      <div className=' ml-[224px] max-lg:ml-0 pt-24 bg-gray-50 pb-8'>
        <Link
                  to={"/dashboard"}
                  className="mx-6 max-sm:mx-4 inline-flex items-center justify-center gap-2 rounded-md text-sm px-4 py-2 mb-4 hover:bg-slate-200"
                >
                  <i class="fa-solid fa-arrow-left"></i>Back to Dashboard
                </Link>
        <section>
                  
                  <div className="flex justify-between mb-6 items-center max-sm:mb-3 px-6 max-sm:px-4">
                    <h2 className="text-2xl font-semibold">All Mentors</h2>
                    {/* <button className="rounded-md px-[20px] py-[10px] text-purple-700 hover:bg-gray-100 text-sm">
                      View all <i class="fa-solid fa-arrow-right pl-2"></i>
                    </button> */}
                  </div>
                  <div className="grid grid-cols-2 gap-5 max-lg:grid-cols-2 max-md:grid-cols-1 px-6 max-sm:px-4">
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
                        <Link to={`/mentor/${m._id}/${id}`} className=" text-white inline-flex items-center justify-center rounded-md text-sm font-[550] bg-purple-600 hover:bg-purple-700 px-4 py-2 w-full">
                          View Profile
                        </Link>
                      </div>
                    </div>
                    ))}
                  </div>
                </section>

      </div>
    </div>
  )
}

export default Allmentors
