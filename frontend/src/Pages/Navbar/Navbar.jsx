import React from "react";

import { Link } from "react-router-dom";
function Navbar({ category, start, works }) {
  return (
    <div className="bg-white z-0 w-full border-b shadow-md max-sm:fixed">
      <div className="flex justify-between p-[10px] px-[19px] items-center py-[15px]">
        <Link to={"/"} className="inline-flex items-center">
          <i class="fa-solid fa-graduation-cap text-3xl text-purple-900 pr-1"></i>
          <h1 className="font-sans text-xl font-bold text-purple-900">
            SkillSwap
          </h1>
        </Link>
        <div className=" max-sm:hidden">
          <nav>
            <a
              href={start}
              className="px-[10px] hover:bg-purple-600 hover:text-white py-2 rounded-md mx-1"
            >
              Get Started
            </a>
            <a
              href={category}
              className="px-[10px] hover:bg-purple-600 hover:text-white py-2 rounded-md mx-1"
            >
              Categories
            </a>
            <a
              href={works}
              className="px-[10px] hover:bg-purple-600 hover:text-white py-2 rounded-md mx-1"
            >
              How Works
            </a>
          </nav>
        </div>
        <div className="flex items-center">
          <p className="pr-[10px]">
            <Link to={"/login"} className="font-semibold max-sm:text-sm">
              Sign in
            </Link>
          </p>

          <Link
            to={"/signup"}
            className="bg-purple-600 text-white px-[18px] py-[8px] rounded-md max-sm:px-3 max-sm:py-1 max-sm:text-sm font-semibold"
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
