import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import profileImg from "../../assets/images/user.jpg";
import axiosInstencs from "../../axios/axiosInstence";
import socket from "../../Socket";

function Sidebar() {
  const access_token = localStorage.getItem("access_token")
  const refresh_token = localStorage.getItem("refresh_token")
  const userID = localStorage.getItem("id")
  const {pathname}=useLocation()
  const navigate = useNavigate()
  const [user,setUser]= useState([])
  // const [userID,setUserID]= useState("")
  const [isOpen,setIsOpen]= useState("isClose")
  const [openToggle,setOpenToggle]= useState("isClose")
  const navigats = [
    { name: "Home", to: "/dashboard", icon: " bx bx-home" },
    { name: "Chat", to: "/chat", icon: " bx bx-chat" },
    { name: "Forums", to: "/forums", icon: " bx bx-group" },
    { name: "Profile", to: "/profile",child:`/profile/edit/${userID}`, icon: " bx bx-user" },
  ];
  // useEffect(()=>{
  //   axiosInstencs.get('/protect',{
  //     headers:{"Authorization" : `Bearer ${access_token}`}
  //   }).then((res)=>{
  //     setUserID(res.data.user.id)
  //     // console.log(res.data);
      
  //   })
  // },[access_token])
  useEffect(()=>{
    socket.emit('login',userID)
  },[userID])
   useEffect(()=>{
    axiosInstencs.get(`/singleuser/${userID}`,{
      headers:{
        "Authorization" :`Bearer ${access_token}`
      }
    }).then((res)=>{
      setUser(res.data.msg)
      
    }).catch((err)=>console.log(err))
   },[userID,access_token])
const toggleOpen=(e)=>{
e.preventDefault()
setOpenToggle((prev)=>prev === "isClose"?"isOpen":"isClose")
}


const logOut =()=>{
  axiosInstencs.post('/logout',{
    accessToken:access_token,
    refreshToken:refresh_token,
  }).then((res)=>{
    console.log(res.data);
    localStorage.clear()
    navigate('/login')
  }).catch((err)=>console.log(err))
  navigate('/login')
}


  return (
    <div className={``}>
      <div className="relative hidden max-lg:block top-1">

      <button onClick={toggleOpen} className="absolute top-2.5 left-4 border px-2 pt-1 rounded-md text-3xl">{openToggle === "isOpen"?<i class="fa-solid fa-xmark text-purple-900"></i>:<i class="text-purple-900 fa-solid fa-bars"></i>}</button>
      </div>

    <div className={`border-r w-56 bg-white flex justify-between flex-col min-h-screen max-lg:w-screen  ${openToggle==="isOpen"?"block":"max-lg:hidden"}`}>
      
      <div className="pt-4 pb-4 max-lg:w-screen ">
        <Link to={"/dashboard"} className="px-4 mb-4 flex items-center max-lg:justify-end">
          {/* <img src={logo} alt="" className="w-9" /> */}
          <i class="fa-solid fa-graduation-cap text-3xl text-purple-900 pr-1"></i>
          <h1 className="font-sans text-xl font-bold text-purple-900">SkillSwap</h1>
        </Link>
        {navigats.map((href, i) => (
          <nav key={i} className="mt-1 space-y-1 px-2 w-full max-lg:pt-4">
            <Link
              className={`text-sm max-lg:text-lg font-medium flex items-center px-3 py-2 rounded-md text-gray-700  ${pathname === href.to || pathname === href.child?"bg-purple-100 text-purple-800":"text-gray-700 hover:bg-gray-100"}`}
              to={href.to}
            >
              <i className={`pr-2 text-2xl max-lg:text-3xl ${href.icon}`}></i>
              {href.name}
            </Link>
          </nav>
        ))}
        <div className="px-2 pt-4">

        <button onClick={logOut} className=" hidden max-lg:text-lg max-lg:flex max-lg:justify-start text-sm font-medium flex items-center justify-center px-1 py-2 rounded-md text-gray-700 text-gray-700 hover:bg-gray-100 rounded-md w-full"><i className="bx bx-log-out pl-1.5 pr-2.5 text-2xl max-lg:text-3xl"></i>Log out</button>
        </div>
      </div>
      {isOpen === "isOpen"?
      
      <div className="rounded-md border  z-50 flex flex-col justify-center m-2 shadow-md max-lg:hidden"> 
      <div className="px-2 py-2 text-md font-semibold">My Account</div>
      <div className="border w-full"></div>
      <Link to={'/profile'} className="inline-flex items-center px-2 rounded-sm text-gray-700 hover:bg-gray-100 py-2 text-sm"> <i className="fa-regular fa-user pr-4 "></i>Profile</Link>
      <button onClick={logOut} className="inline-flex items-center px-2 rounded-sm text-gray-700 hover:bg-gray-100 py-2 text-sm"><i className="fa-solid fa-arrow-right-from-bracket pr-3.5"></i>Log out</button>
      </div>
      :""}
      <div className="border-t p-2 pb-3 ">
        <div onClick={()=>setIsOpen((prev)=>prev === "isClose" ? "isOpen":"isClose")} className="hover:bg-gray-100 rounded-md max-lg:hover:bg-white">

        <button  className="text-sm flex cursor-pointer rounded-md px-2  py-1">
          <img
            src={user.avatar?user.avatar:profileImg}
            alt=""
            className="h-10 w-10 overflow-hidde rounded-full object-cover"
            />
          <div className="pl-3">
            <p className=" text-start">{user.username}</p>
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
