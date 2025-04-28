import React from 'react'
import Search from './Search'
import Sidebar from './Sidebar'

function Forums() {
  return (
    <div>
      <div className=" fixed z-50">
        <Sidebar />
      </div>
      <div className="fixed w-[83%] z-20 ml-[224px] max-lg:ml-0 max-lg:w-full">
        <Search />
      </div>
      <div className='bg-gray-50'>

      </div>
    </div>
  )
}

export default Forums
