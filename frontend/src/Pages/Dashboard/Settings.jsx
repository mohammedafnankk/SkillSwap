import React from 'react'
import Sidebar from './Sidebar'
import Search from './Search'

function Settings() {
  return (
    <div>
      <div className=" fixed z-50">
        <Sidebar />
      </div>
      <div className="fixed w-full z-50 pl-[229px]">
        <Search />
      </div>
      <div className='bg-gray-50'>
        
      </div>
    </div>
  )
}

export default Settings
