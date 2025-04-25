import React from "react";

function Search() {
  return (
    <div className="">
      <div className="flex justify-between px-4 py-4 bg-white border-b border-l shadow-md ">
        <div className="items-center">
          <div className="w-full max-w-2xl">
            <div className="relative w-[150%]">
              <i class="fa-solid fa-magnifying-glass absolute top-2 text-gray-500 text-sm left-3"></i>
              {/* <input
                type="text"
                placeholder="Search..."
                className="rounded-md focus:outline-purple-700 px-3 py-2 text-sm pl-10 w-full border"
              /> */}
            </div>
          </div>
        </div>
        <div>
          <button className="inline-flex items-center justify-center rounded-md relative">
            <i class="text-lg bx bx-bell p-1 px-2 hover:bg-gray-200 rounded-md"></i>
            <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500"></span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Search;
