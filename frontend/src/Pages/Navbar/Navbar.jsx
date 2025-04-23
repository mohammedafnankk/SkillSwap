import React from "react";
import logo from "../../assets/images/skill swap.png";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="bg-white z-0 w-full border-b shadow-md">
      <div className="flex justify-between p-[10px] px-[19px] items-center">
        <Link to={'/'} className=" flex items-center">
          <img src={logo} alt="" className="w-14" />
          <h1 className="font-bold text-2xl text-purple-700">SkillSwap</h1>
        </Link>
        <div className=" max-sm:hidden">
            <nav>
                <a href="#" className="px-[10px]">Features</a>
                <a href="#" className="px-[10px]">Categoreies</a>
                <a href="#" className="px-[10px]">About</a>
            </nav>
        </div>
        <div className="flex items-center">
            <p className="pr-[10px]"><Link to={'/login'} className="">Sign in</Link></p>
            
            <Link to={'/signup'} className="bg-purple-700 text-white px-[18px] py-[8px] rounded-[8px]">Sign up</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
