import React from "react";
import { Link, useLocation } from "react-router-dom";
import profileImg from "../../assets/images/user.jpg";

function Sidebar() {
  const {pathname}=useLocation()
  
  const navigats = [
    { name: "Home", to: "/dashboard", icon: " bx bx-home" },
    { name: "Chat", to: "/chat", icon: " bx bx-chat" },
    { name: "Forums", to: "/forums", icon: " bx bx-group" },
    { name: "Profile", to: "/profile",child:"/profile/edit", icon: " bx bx-user" },
  ];
  return (
    <div className="border-r w-full bg-white flex justify-between flex-col min-h-screen mr-8">
      <div className="pt-4 pb-4">
        <Link to={"/dashboard"} className="px-4 mb-4 flex items-center">
          {/* <img src={logo} alt="" className="w-9" /> */}
          <i class="fa-solid fa-graduation-cap text-3xl text-purple-900 pr-1"></i>
          <h1 className="font-sans text-xl font-bold text-purple-900">SkillSwap</h1>
        </Link>
        {navigats.map((href, i) => (
          <nav key={i} className="mt-1 space-y-1 px-2 ">
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
      <div></div>
      <div className="border-t p-4 ">
        <Link className="text-sm flex">
          <img
            src={profileImg}
            alt=""
            className="h-10 w-10 overflow-hidden rounded-full"
          />
          <div className="pl-4">
            <p>Jhone</p>
            <p className="text-gray-400 text-xs">jhone@gmail.com</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
