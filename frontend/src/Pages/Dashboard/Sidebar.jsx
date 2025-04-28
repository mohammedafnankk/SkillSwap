import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import profileImg from "../../assets/images/user.jpg";
import axiosInstencs from "../../axios/axiosInstence";

function Sidebar() {
  const access_token = localStorage.getItem("access_token")
  const {pathname}=useLocation()
  const [user,setUser]= useState([])
  const [userID,setUserID]= useState("")
  const [isOpen,setIsOpen]= useState("isClose")
  const [openToggle,setOpenToggle]= useState("isClose")
  const navigats = [
    { name: "Home", to: "/dashboard", icon: " bx bx-home" },
    { name: "Chat", to: "/chat", icon: " bx bx-chat" },
    { name: "Forums", to: "/forums", icon: " bx bx-group" },
    { name: "Profile", to: "/profile",child:"/profile/edit", icon: " bx bx-user" },
  ];
  useEffect(()=>{
    axiosInstencs.get('/protect',{
      headers:{"Authorization" : `Bearer ${access_token}`}
    }).then((res)=>{
      setUserID(res.data.user.id)
      // console.log(res.data);
      
    })
  },[])
   useEffect(()=>{
    axiosInstencs.get(`/singleuser/${userID}`).then((res)=>{
      setUser(res.data.msg)
      
    })
   },[userID])
const toggleOpen=(e)=>{
e.preventDefault()
setOpenToggle((prev)=>prev === "isClose"?"isOpen":"isClose")
}


  return (
    <div>
      <div className="relative hidden max-lg:block">

      <button onClick={toggleOpen} className="absolute top-2.5 left-4 border px-2 pt-1 rounded-md text-4xl"><i class="text-purple-900 fa-solid fa-bars"></i></button>
      </div>

    <div className={`border-r w-56 bg-white flex justify-between flex-col min-h-screen max-lg:w-screen  ${openToggle==="isOpen"?"block":"max-lg:hidden"}`}>
      
      <div className="pt-4 pb-4 max-lg:w-screen">
        <Link to={"/dashboard"} className="px-4 mb-4 flex items-center max-lg:justify-end">
          {/* <img src={logo} alt="" className="w-9" /> */}
          <i class="fa-solid fa-graduation-cap text-3xl text-purple-900 pr-1"></i>
          <h1 className="font-sans text-xl font-bold text-purple-900">SkillSwap</h1>
        </Link>
        {navigats.map((href, i) => (
          <nav key={i} className="mt-1 space-y-1 px-2 w-full ">
            <Link
              className={`text-sm font-medium flex items-center px-3 py-2 rounded-md text-gray-700  ${pathname === href.to || pathname === href.child?"bg-purple-100 text-purple-800":"text-gray-700 hover:bg-gray-100"}`}
              to={href.to}
            >
              <i className={`pr-2 text-2xl ${href.icon}`}></i>
              {href.name}
            </Link>
            
          </nav>
        ))}
      </div>
      {isOpen === "isOpen"?
      
      <div className="rounded-md border  z-50 flex flex-col justify-center m-2 shadow-md"> 
      <div className="px-2 py-2 text-md font-semibold">My Account</div>
      <div className="border w-full"></div>
      <Link to={'/profile'} className="inline-flex items-center px-2 rounded-sm hover:bg-purple-100 hover:text-purple-800 py-2 text-md"> <i className="fa-regular fa-user pr-4 "></i>Profile</Link>
      <button className="inline-flex items-center px-2 rounded-sm hover:bg-purple-100 hover:text-purple-800 py-2 text-md"><i className="fa-solid fa-arrow-right-from-bracket pr-3.5"></i>Log out</button>
      </div>
      :""}
      <div className="border-t p-2 pb-3 ">
        <div className="hover:bg-purple-100 rounded-md">

        <button onClick={()=>setIsOpen((prev)=>prev === "isClose" ? "isOpen":"isClose")} className="text-sm flex cursor-pointer rounded-md hover:bg-purple-100 px-2  py-1">
          <img
            src={user.avatar?user.avatar:profileImg}
            alt=""
            className="h-10 w-10 overflow-hidde rounded-full object-cover"
            />
          <div className="pl-3">
            <p className=" text-start hover:text-purple-800">{user.username}</p>
            <p className="text-gray-400 text-xs">{user.email}</p>
          </div>
        </button>
            </div>
      </div>
    </div>
    </div>
  );
}

export default Sidebar;
