import React, { useEffect, useState } from 'react'
import axiosInstencs from '../../axios/axiosInstence'

function MentorProfile() {
    const [profile,setProfile] = useState([])

    useEffect(()=>{
        axiosInstencs.get('/mentor/67efa971cec324f634192bd7').then((res)=>{
            console.log(res.data);
            setProfile(res.data.mentor)
            
        }).catch((err)=>{
            console.log(err);
            
        })
    },[])
    
  return (
    <div>
      <div>
       <p>{profile.fullname}</p>
       <p>{profile.email}</p>
     
   
      </div>
    </div>
  )
}

export default MentorProfile
