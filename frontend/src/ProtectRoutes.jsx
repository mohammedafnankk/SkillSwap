import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function ProtectRoutes() {
    const token = localStorage.getItem("access_token")

  return token ? <Outlet/> :<Navigate to={'/login'} replace/>
}

export default ProtectRoutes
