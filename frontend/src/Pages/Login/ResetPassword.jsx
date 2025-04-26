import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axiosInstencs from "../../axios/axiosInstence";
import toast from "react-hot-toast";
function ResetPassword() {
  const {id,token} = useParams()
  const navigate=useNavigate()
  const [isSend, setIsSend] = useState(false);
  const [password, setPassword] = useState("");
  const [cPassword,setCPassword] =useState("")
  const [inputType,setInputType]= useState("password")
  const [cinputType,setCInputType]= useState("password")
  const [isSending,setIsSending]= useState(false)

  const handleChangePassword=(e)=>{
   e.preventDefault()
   if(password ===""){
   return document.getElementById("pass_error").innerHTML="*Please fill this field"
   }else{
    document.getElementById("pass_error").innerHTML=""
   }
   if(cPassword ===""){
   return document.getElementById("cpass_error").innerHTML="*Please fill this field"
   }else if(cPassword != password){
    return document.getElementById("cpass_error").innerHTML="*Password not match"
   }else{
    document.getElementById("cpass_error").innerHTML=""
   }
   axiosInstencs.patch(`/reset-password/${id}/${token}`,{
    newPassword:password
   }).then((res)=>{
    toast.success("Password reset successfully")
    navigate('/login')
    console.log(res.data);
    
   }).catch((err)=>console.log(err))
  }
  return (
    <div className="max-lg:flex max-lg:justify-center max-lg:h-screen grid grid-cols-2 gap-[10px] bg-white rounded-[15px] max-lg:grid-cols-1 max-h-[calc(100vh-77px)] max-sm:p-[10px]  ">
      <div className="flex   flex-col justify-center px-[60px] max-sm:p-[10px] max-sm:justify-star">
        <div className="mb-8">
          <Link
            to={"/login"}
            className="text-sm hover:bg-slate-200 flax justify-center px-4 py-2 rounded-md items-center gap-2"
          >
            <i class="fa-solid fa-arrow-left"></i> Back to login
          </Link>
        </div>
        <div className="border rounded-lg shadow-sm">
          <div className="p-6 space-y-1.5 flex flex-col max-sm:pb-[20px ">
            <h1 className="text-2xl font-semibold">Rest Password</h1>
            <p className="text-sm text-gray-500">
              Create a new password for your account
            </p>
          </div>
          
            <form action="" className=" p-6 pt-0">
              <div>
                <label className="text-sm ml-[5px]">New Password</label>
                <br />
                <div className="relative">
                  <input
                    className=" focus:outline-purple-700 rounded-md border-[1px] border-[#D9D9D9] text-[13px] p-[10px] w-full"
                    placeholder="Enter your new password"
                    type={inputType}
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    require
                  />{" "}
                  <span
                    className="cursor-pointer absolute right-2 top-[5px]"
                    onClick={()=>setInputType((prev)=> prev ==="password"?"text":"password")}
                  >
                    {inputType === "password" ? (
                      <i class="fa-regular fa-eye p-2 hover:bg-gray-200 rounded-md"></i>
                    ) : (
                      <i class="fa-regular fa-eye-slash p-2 hover:bg-gray-200 rounded-md"></i>
                    )}
                  </span>
                </div>
                <span
                  id="pass_error"
                  className="text-red-600 text-[13px] pl-[5px]"
                ></span>
              </div>

              <div>
                <label className="text-sm ml-[5px]">Confirm New Password</label>
                <br />
                <div className="relative">
                  <input
                    className=" focus:outline-purple-700 rounded-md border-[1px] border-[#D9D9D9] text-[13px] p-[10px] w-full"
                    placeholder="Confirm your new password"
                    type={cinputType}
                    onChange={(e) => setCPassword(e.target.value)}
                    value={cPassword}
                    require
                  />
                  <span
                    className="absolute right-2 top-[5px] cursor-pointer"
                    onClick={()=>setCInputType((prev)=>prev==="password"?"text":"password")}
                  >
                    {cinputType === "password" ? (
                      <i class="fa-regular fa-eye p-2 hover:bg-gray-200 rounded-md"></i>
                    ) : (
                      <i class="fa-regular fa-eye-slash p-2 hover:bg-gray-200 rounded-md"></i>
                    )}
                  </span>
                </div>
                <span
                  id="cpass_error"
                  className="text-red-600 text-[13px] pl-[5px]"
                ></span>
              </div>
              <div className=" text-center rounded-md bg-[#7c3bed] hover:bg-purple-700">
                {/* <button onClick={handleChangePassword} className="text-sm text-white p-[10px] inline-flex gap-1 items-center">
                  {isSending ===true?
                  
                  <p className="h-4 w-4 border-white border-2 border-t-transparent rounded-full animate-spin"></p>
                  :""}
                  {isSending ===true?"Loading...":"Reset Password"}
                  
                </button> */}
                <button onClick={handleChangePassword} className="text-sm text-white p-[10px] inline-flex gap- items-center">Reset Password</button>
              </div>

            </form>
          
          <div className="flex justify-center items-center border-t p-5">
            <p className="text-sm text-gray-500">
              Remember your password?{" "}
              <Link className="text-sm text-purple-700" to={"/login"}>
                Sign in
              </Link>
            </p>
          </div>

          {/* errro */}
          {/* <div className="p-6">
          <div className="pb-6 space-y-1.5 flex flex-col max-sm:pb-[20px ">
            <h1 className="text-2xl font-semibold">Invalid Reset Link</h1>
            <p className="text-sm text-gray-500">
            The password reset link is invalid or has expired.
            </p>
          </div>
          <div className="rounded-lg p-4 border border-red-500 text-red-500 flex flex-col">
              <h1 className="text-red-600 text-lg">Error</h1>
              <p className="text-sm">
              Please request a new password reset link to continue.</p>
          </div>
          <div className="flex justify-center items-center pt-6">
  
          <div className="bg-[#7c3bed] rounded-md text-center px-4 py-2 hover:bg-purple-700">
            <Link to={'/forgot-password'} className="text-white text-sm">Request New Link</Link>
          </div>
          </div>
          </div> */}
        </div>
      </div>
      <div className="max-lg:hidden bg-gradient-to-br from-purple-600 to-indigo-700 text-white flex items-center p-12 h-screen">
        <div className="">
          <h1 className="text-3xl font-bold mb-6">
            Grow your skills with SkillSwap
          </h1>
          <p className="text-lg mb-8">
            Connect with mentors and peers, share knowledge, and accelerate your
            learning journey.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex">
              <div className="pr-[15px] flex items-center">
                <i class="bg-white/20 p-[10px] text-2xl rounded-full fa-solid fa-user-group"></i>
              </div>
              <div>
                <h3 className="font-semibold">Expert Mentors</h3>
                <p className="text-sm text-white/80">
                  Learn from industry professionals
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="pr-[15px] flex items-center">
                <i class="bg-white/20 p-[10px] text-2xl rounded-full fa-regular fa-message"></i>
              </div>
              <div>
                <h3 className="font-semibold">Live Discussions</h3>
                <p className="text-sm text-white/80">
                  Engage in real-time conversations
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="pr-[15px] flex items-center">
                <i class="bg-white/20 p-[10px] text-4xl rounded-full fa-regular fa-lightbulb"></i>
              </div>
              <div>
                <h3 className="font-semibold">Skill Exchange</h3>
                <p className="text-sm text-white/80">
                  Trade knowledge with peers
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="pr-[15px] flex items-center">
                <i class="bg-white/20 p-[10px] text-2xl rounded-full fa-solid fa-shield"></i>
              </div>
              <div>
                <h3 className="font-semibold">Secure Platform</h3>
                <p className="text-sm text-white/80">
                  Safe and private interactions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default ResetPassword;
