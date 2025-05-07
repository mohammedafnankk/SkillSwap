import React, { useEffect } from 'react'
import Search from './Search'
import Sidebar from './Sidebar'
import axiosInstencs from '../../axios/axiosInstence'

function Forums() {
  const refreshToken = localStorage.getItem("refresh_token");
 
    const token =()=>{
   
      axiosInstencs.post('/refresh-token',{token:refreshToken}).then((res)=>{
        console.log(res.data);
        localStorage.setItem("access_token",res.data.accessToken)
        localStorage.setItem("refresh_token",res.data.refreshToken)
      }).catch((err)=>console.log(err))
    }
  
  return (
    <div>
      <div className=" fixed z-50">
        <Sidebar />
      </div>
      <div className="fixed w-[83%] z-20 ml-[224px] max-lg:ml-0 max-lg:w-full">
        {/* <Search /> */}
      </div>
      <div className='bg-gray-50 ml-[224px]'>
     <button className='text-red-600 ' onClick={token}>Click</button>
      </div>
    </div>
  )
}

export default Forums
